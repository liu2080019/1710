/**
 * Created by fed on 2017/11/10.
 */
import draw from './lib';
import { Div, Text, Img } from './lib/node';

import imgUrl from './images.jpeg';

const canvas = document.getElementById('theCanvas');


const container = new Div({
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  borderWidth: 1, // border的样式总是实线
  borderColor: '#c2e43d'
});

const img = new Img({
  width: 150,
  height: 150,
}, imgUrl);
const imgContainer = new Div({
  width: 150,
  height: 150,
  paddingLeft: 10,
}, [img]);
container.appendChild(imgContainer);

const text = new Text({
}, 'Are you ok? Thank you! I\'m fine. Are you mdzz? Just so-so!');
const textContainer = new Div({
  width: 40,
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
}, [text]);
container.appendChild(textContainer);

draw(container, canvas);
