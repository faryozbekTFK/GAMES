const CHARLIST = document.querySelector(".charList");
const CHARS = document.querySelectorAll("p");
const WORDS = document.querySelectorAll("span");
const MINUT = document.getElementById("minut");
const SEKUND = document.getElementById("sekund");
const COUNTWORD = document.getElementById("countWord");
const COUNT = document.getElementById("count");
const WIN = document.querySelector(".win");
const OVER = document.querySelector(".over");

let wordArr = [],
  wordCount = 0;
CHARS.forEach((harf) => {
  harf.onclick = function () {
    harf.style.border = "2px solid red";
    wordArr.push(harf.textContent);
    console.log(harf.textContent);
  };
});

ondblclick = function () {
  let word = wordArr.join("");
  console.log("WORD: ", word);
  WORDS.forEach((soz) => {
    if (soz.textContent == word) {
      console.log("RESULT: ", true);
      soz.style.color = "gray";
      wordCount++;
      COUNTWORD.innerText = wordCount;
    } else console.log("RESULT: ", false);
  });
  if (wordCount === parseInt(COUNT.textContent)) {
    WIN.style.display = "flex";
  }
  word = "";
  wordArr = [];
};

// TIME FUNCTION START

let minut = parseInt(MINUT.textContent),
  secund = parseInt(SEKUND.textContent);
setInterval(() => {
  if (secund) {
    SEKUND.innerText = --secund;
  } else if (minut) {
    secund = 59;
    MINUT.innerText = --minut;
    SEKUND.innerText = secund;
  } else {
    MINUT.innerText = 0;
    minut = 0;
    SEKUND.innerText = 0;
    secund = 0;
    OVER.style.display = "flex";
  }
}, 1000);

// TIME FUNCTION FINISH
