/**
 * Created by fed on 2017/11/10.
 */
import assign from 'object-assign';

export default class TextNode {
  constructor(styles = {}, url) {
    this.type = 'img';
    this.styles = assign({
      fontSize: 14,
      lineHeight: 1.2, // 行高只能是纯数字，也就是font size的字数
    }, styles);
    this.url = url;
  }
}