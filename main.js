const BOX = document.getElementById("box");
const LOADBTN = document.getElementById("loading");
const REFBTN = document.getElementById("refresh");
const LOADTEXT = document.getElementById("loadText");
let IMGS = [],
  idImg = 0,
  time = 2000;
function addImage(img) {
  console.log("Calling addImage Method");
  const imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = "no-empty";
  IMGS.push(imgElement);
  BOX.appendChild(imgElement);
}

function loadImg(url, callback) {
  console.log("image loading . . .");
  LOADTEXT.innerText = "Loading...";

  setTimeout(() => {
    const image = new Image();
    image.onload = () => {
      console.log("image loaded . . .");
      LOADTEXT.style.display = "none";
      callback(image.src);
    };
    image.src = url;
  }, time);
}

LOADBTN.addEventListener("click", () => {
  loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage);
  loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage);
  loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage);
  loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage);
  LOADBTN.disabled = "false";
  LOADBTN.style.cursor = "no-drop";
  LOADBTN.style.background = "gray";
  setTimeout(() => {
    LOADBTN.style.display = "none";
    REFBTN.style.display = "flex";
  }, time + 500);
});

REFBTN.addEventListener("click", () => {
  console.log("Refresh...");
  REFBTN.style.background = "gray";
  REFBTN.style.cursor = "no-drop";
  for (let i = 0; i < IMGS.length; i++) IMGS[i].style.display = "none";
  LOADTEXT.style.display = "flex";
  loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage);
  loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage);
  loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage);
  loadImg(`https://picsum.photos/id/${idImg++}/200/200`, addImage);
  setTimeout(() => {
    REFBTN.style.background = "red";
    REFBTN.style.cursor = "pointer";
  }, time + 500);
});
