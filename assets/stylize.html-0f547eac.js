import{_ as l,V as u,W as r,a0 as a,Y as d,Z as t,X as n,$ as s,a1 as e,e as k}from"./framework-a3d45824.js";const v={},m=n("p",null,"Plugin for stylizing token.",-1),g=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" stylize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-stylize"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("stylize"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  config`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// your options"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Check FAQ for more details._Recommanded_"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" stylize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-stylize"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("stylize"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// your options"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Check FAQ for more details._Recommanded_"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=e(`<p>The <code>config</code> option receives an array, where each element accepts 2 options:</p><ul><li><p><code>matcher</code>: should be <code>string</code> or <code>RegExp</code>.</p></li><li><p><code>replacer</code>: a function customizing the matched token</p></li></ul><p>For example, you can use the following config to transform <code>*Recommended*</code> into a Badge <code>&lt;Badge type=&quot;tip&quot;&gt;Recommended&lt;/Badge&gt;</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>mdIt<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>stylize<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  config<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      matcher<span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tag <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&quot;em&quot;</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            tag<span class="token operator">:</span> <span class="token string">&quot;Badge&quot;</span><span class="token punctuation">,</span>
            attrs<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;tip&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            content<span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),f=n("p",null,[s("Another example is you want a to set all the emphasis "),n("code",null,"n’t"),s(" words to red color, so that "),n("code",null,"Setting this to a invalid syntax *doesn’t* have any effect."),s(' becomes: "Setting this to a invalid syntax '),n("span",{style:{color:"red"}},"doesn’t"),s(' have any effect."')],-1),w=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>mdIt<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>stylize<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  config<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      matcher<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">n’t$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tag<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> content <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&quot;em&quot;</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            tag<span class="token operator">:</span> <span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span>
            attrs<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>attrs<span class="token punctuation">,</span> style<span class="token operator">:</span> <span class="token string">&quot;color: red&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            content<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also, we provide a <code>localConfigGetter</code> to receive env object in case you want to apply local rules in certain situations.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>mdIt<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>stylize<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">localConfigGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> env<span class="token punctuation">.</span>stylize <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mdIt<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&quot;Check FAQ for more details._Recommanded_&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  stylize<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      matcher<span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tag <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&quot;em&quot;</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            tag<span class="token operator">:</span> <span class="token string">&quot;Badge&quot;</span><span class="token punctuation">,</span>
            attrs<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;tip&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            content<span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Performance</p><p>To avoid performance impact, you should try to avoid using RegExp for better performance unless you need it.</p><p>Also try to create snippets with RegExp having lower costs, e.g: RegExp starting with <code>^</code> and ending with <code>$</code>.</p><p>For example, if you only want to match &quot;SHOULD&quot;, &quot;MUST&quot; and &quot;MAY&quot;, you should write <code>/^(?:SHOULD|M(?:UST|AY))$/u</code> instead of <code>/SHOULD|MUST|MAY/u</code>. The fist one will only match 2 time with &quot;A loo...oong content&quot; with 1000 characters, but will match nearly 3000 times with the second RegExp.</p></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItStylizeResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Tag name
   */</span>
  tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Attributes settings
   */</span>
  attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tag content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownItStylizeConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Inline token matcher
   */</span>
  matcher<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Content Replacer
   */</span>
  <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    env<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> MarkdownItStylizeResult <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownItStylizeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Stylize config
   */</span>
  config<span class="token operator">?</span><span class="token operator">:</span> MarkdownItStylizeConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Local config getter
   *
   * <span class="token keyword">@param</span> <span class="token parameter">env</span> Markdown env object
   * <span class="token keyword">@returns</span> local stylize config
   */</span>
  localConfigGetter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>env<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> MarkdownItStylizeConfig<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function q(_,x){const i=k("CodeTabs");return u(),r("div",null,[m,a(" more "),g,d(i,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:o,value:p,isActive:c})=>[h]),tab1:t(({title:o,value:p,isActive:c})=>[b]),_:1}),y,a(" markdownlint-disable MD033 "),f,a(" markdownlint-enable MD033 "),w])}const R=l(v,[["render",q],["__file","stylize.html.vue"]]);export{R as default};
