const MINCONT = document.querySelectorAll(".minCont");
const BOX = document.querySelectorAll('.box');
const LOADBTN = document.querySelectorAll(".loading");
const REFBTN = document.querySelectorAll(".refresh");
const LOADTEXT = document.querySelectorAll(".loadText");
let boxId = 0, IMGS = [], idImg = 0, time = 2000;

function addImage(img, callBox) {
  console.log("Calling addImage Method");
  const imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.classList.add = `imgs${boxId}`;
  imgElement.alt = "no-empty";
  IMGS.push(imgElement);
  callBox.appendChild(imgElement);
}

function loadImg(url, callback, callBox, texLoad) {
  let blurBc = 10;
  console.log("image loading . . .");
  texLoad.innerText = "Loading...";
  setTimeout(() => {
    const image = new Image();
    image.onload = () => {
      console.log("image loaded . . .");
      texLoad.style.display = "none";
      callback(image.src, callBox);
    };
    image.src = url;
  }, time);
}

LOADBTN.forEach((btnLoad, idx) => {
  btnLoad.addEventListener('click', () => {
    console.log('Loading...');
    loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage, BOX[idx], LOADTEXT[idx]);
    loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage, BOX[idx], LOADTEXT[idx]);
    loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage, BOX[idx], LOADTEXT[idx]);
    loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage, BOX[idx], LOADTEXT[idx]) ;
    boxId ++;
    btnLoad.disabled = "false";
    btnLoad.style.cursor = "no-drop";
    btnLoad.style.background = "gray";
    setTimeout(() => {
      btnLoad.style.display = "none";
      REFBTN[idx].style.display = "flex";
      if (boxId < 3) MINCONT[boxId].style.display = 'flex';
  }, time + 500);
  })
});

REFBTN.forEach((btnRef, idx) => {
  btnRef.addEventListener('click', () => {
    console.log('Refresh...');
    btnRef.style.cursor = "no-drop";
    btnRef.style.background = "gray";
    
    LOADTEXT[idx].style.display = "flex";
    loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage, BOX[idx], LOADTEXT[idx]);
    loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage, BOX[idx], LOADTEXT[idx]);
    loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage, BOX[idx], LOADTEXT[idx]);
    loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage, BOX[idx], LOADTEXT[idx]) ;
    btnRef.disabled = true;
    setTimeout(() => {
      btnRef.disabled = false;
      btnRef.style.cursor = "pointer";
      btnRef.style.background = "red";
  }, time + 500);
  })
});