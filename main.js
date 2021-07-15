const RESULT = document.getElementById("result");
const DECBTN = document.getElementById("decrement");
const DECCOUNT = document.getElementById("countDec");
const INCBTN = document.getElementById("increment");
const INCCOUNT = document.getElementById("countInc");
const TIME = document.getElementById("time");
const INTERVAL = document.getElementById("interval");
const NOTVALUE = document.getElementById("notValue");
const INTERVALCOUNT = document.getElementById("countIntervalVal");
const TIMECOUNT = document.getElementById("countTimeVal");

let resultValue = 0,
  incC = 0,
  decC = 0,
  firstInter,
  secondInter,
  firsTime,
  secondTime,
  firIntC = 0,
  secIntC = 0,
  firTimC = 0,
  secTimC = 0;


function decrements() {
  if (INTERVAL.value) {
    resultValue -= INTERVAL.value;
    timeLine();
    decC++;
    DECCOUNT.innerText = decC;
    NOTVALUE.innerText = "";
  } else {
    NOTVALUE.innerText = "NOT VALUE";
  }
}
function increments() {
  if (INTERVAL.value) {
    resultValue = resultValue + parseInt(INTERVAL.value);
    timeLine();
    incC++;
    INCCOUNT.innerText = incC;
    NOTVALUE.innerText = "";
  } else {
    NOTVALUE.innerText = "NOT VALUE";
  }
}

function timeLine() {
  if (TIME.value) {
    setTimeout(() => {
      RESULT.innerText = resultValue;
    }, TIME.value * 1000);
  } else {
    RESULT.innerText = resultValue;
  }
}

DECBTN.onclick = decrements;
INCBTN.onclick = increments;
