/**
 * Created by fed on 2017/11/10.
 */
function getSize(dom) {
  return { w: dom.width, h: dom.height };
}

function getImg(src) {
  let img = new Image();
  img.crossOrigin = '*';
  img.src = src;
  return new Promise(resolve => {
    img.onload = function() {
      resolve(img);
    };
  });
}

export default function draw(element, canvas) {
  const ctx = canvas.getContext('2d');
  getImg('dist/ef110211b7bdc38326dc22c61bef16fe.jpeg').then(image => {
    let sumX = 10,
      sumY = 10;
    // 绘制图片
    ctx.drawImage(image, sumX + 10, sumY, 150, 150);

    // 绘制文字
    const line_height = 14 * 1.2;
    sumY += 150;
    ctx.font = '14px hi';
    let txt = 'Are you ok?';
    ctx.fillText(txt, 250 - ctx.measureText(txt).width / 2, sumY);

    sumY += line_height;
    txt = 'Thank you!';
    ctx.fillText(txt, 250 - ctx.measureText(txt).width / 2, sumY);

    sumY += line_height;
    txt = "I'm fine. Are";
    ctx.fillText(txt, 250 - ctx.measureText(txt).width / 2, sumY);

    sumY += line_height;
    txt = 'you mdzz?';
    ctx.fillText(txt, 250 - ctx.measureText(txt).width / 2, sumY);

    sumY += line_height;
    txt = 'Just so-so!';
    ctx.fillText(txt, 250 - ctx.measureText(txt).width / 2, sumY);

    // 最终绘制绿色线条
    ctx.rect(10, 10, 480, 490);
    ctx.strokeStyle = '#c3e234';
    ctx.stroke();
  });
}
