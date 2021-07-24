const PREV = document.getElementById("prev");
const NEXT = document.getElementById("next");
const CIR = document.querySelectorAll(".cir");
const CONTMIN = document.querySelectorAll(".minCont");
let idx = 0,
  idxOld = 0;
PREV.addEventListener("click", () => {
  if (idx > 0) {
    idx--;
    removeClassList();
    addClassList();
    idxOld = idx;
    console.log(idx);
  }
});
NEXT.addEventListener("click", () => {
  if (idx < CONTMIN.length - 1) {
    idx++;
    removeClassList();
    addClassList();
    idxOld = idx;
    console.log(idx);
  }
});
function addClassList() {
  CIR[idx].classList.add("cirActive");
  CONTMIN[idx].classList.add("minContAct");
}
function removeClassList() {
  CIR[idxOld].classList.remove("cirActive");
  CONTMIN[idxOld].classList.remove("minContAct");
}
