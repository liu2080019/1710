/**
 * Created by fed on 2017/11/10.
 */
export default function draw(element, canvas) {
  const ctx = canvas.getContext('2d');
  ctx.rect(4, 4, 30, 30);
  ctx.strokeStyle = '#c3e234';
  ctx.stroke();
}