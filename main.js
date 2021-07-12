const BOX = document.querySelectorAll("div");
const BODY = document.querySelector("body");
let colorArr = [];
let whiteColor = [];
whiteColor.push("white");
for (let i = 0; i < BOX.length; i++) {
  let R = Math.trunc(Math.random() * 255);
  let G = Math.trunc(Math.random() * 255);
  let B = Math.trunc(Math.random() * 255);
  colorArr.push("RGB(" + R + "," + G + "," + B + ")");
  BOX[i].innerText = colorArr[i];
  BOX[i].style.background = colorArr[i];
}

for (let i = 0; i < BOX.length; i++) {
  BOX[i].onclick = function () {
    BODY.style.background = colorArr[i];
  };
}
