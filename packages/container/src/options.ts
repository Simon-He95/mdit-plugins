import type { RenderRule } from "markdown-it/lib/renderer.js";

export interface MarkdownItContainerOptions {
  /**
   * Container name
   *
   * 自定义容器的名称
   */
  name: string;

  /**
   * Container marker
   *
   * 自定义容器的标识符
   *
   * @default ":"
   */
  marker?: string;

  /**
   * Validate whether it should be regarded as this container type
   *
   * @param params the content after the marker
   * @param markup marker character
   * @returns is this container type or not
   *
   * 校验内容是否应该作为此类型容器
   *
   * @param params 标识符后面的内容
   * @param markup 标识字符
   * @returns 是否是此容器类型
   *
   * @default params.trim().split(" ", 2)[0] === name
   */
  validate?: (params: string, markup: string) => boolean;

  /**
   * Opening tag render function
   *
   * 开始标签渲染函数
   */
  openRender?: RenderRule;

  /**
   * Closing tag render function
   *
   * 结束标签渲染函数
   */
  closeRender?: RenderRule;
}
