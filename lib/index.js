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
    const MAX_WIDTH = 80;
    sumY += 150;
    ctx.font = '14px hi';
    const allTxt =
      "\nAre you ok? Thank you! I'm fine. Are you mdzz? Just so-so!";
    const txtAry = [];
    let midTxt = '';
    for (let i of allTxt) {
      midTxt += i;
      if (ctx.measureText(midTxt).width > 80) {
        txtAry.push(midTxt);
        midTxt = '';
      }
    }
    for (let i of txtAry) {
      sumY += line_height;
      ctx.fillText(i, 250 - ctx.measureText(i).width / 2, sumY);
    }

    // 最终绘制绿色线条
    ctx.rect(10, 10, 480, 490);
    ctx.strokeStyle = '#c3e234';
    ctx.stroke();
  });
}
