/**
 * Created by fed on 2017/11/10.
 */
export default class DivNode {
  constructor(styles = {}, children = []) {
    this.type = 'div';
    this.styles = styles;
    this.children = [];
  }
  appendChild(node) {
    this.children.push(node);
  }
}