const MOUSECOOR = document.getElementById("mouseCoor");
const RESULT = document.getElementById("result");
const canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
let xM,
  yM,
  idxC = [];
lines = [];
(allArea = []), (allMinAreaSum = []);

class drawTriangle {
  constructor(x, y) {
    if (canvas.getContext) {
      context.beginPath();
      context.moveTo(x + 100, y + 10);
      context.lineTo(x + 10, y + 150);
      context.lineTo(x + 190, y + 150);
      context.fill();
    }
    let x1 = x + 100,
      y1 = y + 10,
      x2 = x + 10,
      y2 = y + 150,
      x3 = x + 190,
      y3 = y + 150;
    let uchbur = { x1, y1, x2, y2, x3, y3 };
    console.log(uchbur);
    lines.push(uchbur);
  }
}

console.log("1-uchburchak:");
const uch1 = new drawTriangle(
  Math.trunc(Math.random() * 200),
  Math.trunc(Math.random() * 200)
);
console.log("2-uchburchak:");
const uch2 = new drawTriangle(
  Math.trunc(Math.random() * 200),
  Math.trunc(Math.random() * 200)
);
console.log("3-uchburchak:");
const uch3 = new drawTriangle(
  Math.trunc(Math.random() * 200),
  Math.trunc(Math.random() * 200)
);

function lineLength(xx1, yy1, xx2, yy2) {
  return Math.sqrt(Math.abs(xx1 - xx2) ** 2 + Math.abs(yy1 - yy2) ** 2);
}

function area(x1, y1, x2, y2, x3, y3) {
  let a = lineLength(x1, y1, x2, y2);
  let b = lineLength(x1, y1, x3, y3);
  let c = lineLength(x2, y2, x3, y3);
  console.log("a = ", a);
  console.log("b = ", b);
  console.log("c = ", c);
  let P = (a + b + c) / 2;
  return Math.sqrt(P * (P - a) * (P - b) * (P - c));
}

function lastResults(xM, yM) {
  lines.forEach((line, idx) => {
    console.log(`Yuqori nuqta: ( ${line.x1}; ${line.y1} )`);
    console.log(`Chap nuqta: ( ${line.x2}; ${line.y2} )`);
    console.log(`O'ng nuqta: ( ${line.x3}; ${line.y3} )`);
    let S = area(line.x1, line.y1, line.x2, line.y2, line.x3, line.y3);
    console.log(`Yuzasi: ${S}`);
    allArea.push(S);
    let sMin =
      area(xM, yM, line.x1, line.y1, line.x2, line.y2) +
      area(xM, yM, line.x2, line.y2, line.x3, line.y3) +
      area(xM, yM, line.x1, line.y1, line.x3, line.y3);
    allMinAreaSum.push(sMin);
    if (S >= sMin) idxC.push(idx + 1);
  });
}

canvas.onmousedown = (xM, yM) => {
  coordinate(xM, yM);
  let id = "";
  if (idxC.length > 0) {
    RESULT.innerText = `Nuqta ${idxC.join()} - uchburchakda yotadi.`;
    idxC = [];
  } else {
    RESULT.innerText = "Nuqta uchburchakda yotmaydi.";
  }
  console.log("allArea: ", allArea);
  console.log("allMinAreaSum: ", allMinAreaSum);
  allArea = [];
  allMinAreaSum = [];
  id = "";
};

function coordinate(event) {
  let x = event.clientX;
  let y = event.clientY;
  console.log("Restar:");
  lastResults(x, y);
  MOUSECOOR.innerText = `Ko'stakich koordinatasi: (${x}; ${y})`;
  console.log(`${x}, ${y}`);
}
