const PREV = document.getElementById("prev");
const NEXT = document.getElementById("next");
const IMGS = document.querySelectorAll("img");
const CIR = document.querySelectorAll(".cir");
let idx = 0,
  idxOld = 0;
PREV.addEventListener("click", () => {
  if (idx > 0) {
    idx--;
    CIR[idxOld].classList.remove("cirActive");
    CIR[idx].classList.add("cirActive");
    IMGS[idxOld].classList.remove("imgActive");
    IMGS[idx].classList.add("imgActive");
    idxOld = idx;
    console.log(idx);
  }
});
NEXT.addEventListener("click", () => {
  if (idx < IMGS.length - 1) {
    idx++;
    CIR[idxOld].classList.remove("cirActive");
    CIR[idx].classList.add("cirActive");
    IMGS[idxOld].classList.remove("imgActive");
    IMGS[idx].classList.add("imgActive");
    idxOld = idx;
    console.log(idx);
  }
});
CIR.forEach((circle, index) => {
  circle.onclick = function () {
    idx = index;
    CIR[idxOld].classList.remove("cirActive");
    circle.classList.add("cirActive");
    IMGS[idxOld].classList.remove("imgActive");
    IMGS[idx].classList.add("imgActive");
    idxOld = idx;
  };
});
