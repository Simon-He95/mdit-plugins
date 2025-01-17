/**
 * Forked from https://github.com/markdown-it/markdown-it-sub/blob/master/index.js
 */

import { UNESCAPE_RE } from "./utils.js";

import type { PluginSimple } from "markdown-it";
import type { RuleInline } from "markdown-it/lib/parser_inline.js";

const subscriptRender: RuleInline = (state, silent) => {
  let found;
  let token;
  const max = state.posMax;
  const start = state.pos;

  if (state.src.charAt(start) !== "~") return false;

  if (silent) return false; // don’t run any pairs in validation mode
  if (start + 2 >= max) return false;

  state.pos = start + 1;

  while (state.pos < max) {
    if (state.src.charAt(state.pos) === "~") {
      found = true;
      break;
    }

    state.md.inline.skipToken(state);
  }

  if (!found || start + 1 === state.pos) {
    state.pos = start;

    return false;
  }

  const content = state.src.slice(start + 1, state.pos);

  // don’t allow unescaped spaces/newlines inside
  if (/(^|[^\\])(\\\\)*\s/u.exec(content)) {
    state.pos = start;

    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 1;

  // Earlier we checked !silent, but this implementation does not need it
  token = state.push("sub_open", "sub", 1);
  token.markup = "~";

  token = state.push("text", "", 0);
  token.content = content.replace(UNESCAPE_RE, "$1");

  token = state.push("sub_close", "sub", -1);
  token.markup = "~";

  state.pos = state.posMax + 1;
  state.posMax = max;

  return true;
};

export const sub: PluginSimple = (md) => {
  md.inline.ruler.after("emphasis", "sub", subscriptRender);
};
