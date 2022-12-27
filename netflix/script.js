// za module
const iconBtn = document.querySelectorAll(".iconBtn");
const hiddenTextBox = document.querySelectorAll(".hiddenTextBox");
const closeIconBtn = document.querySelectorAll(".closeIconBtn");
const boxQuestions = document.querySelectorAll(".text-box");
const startSection = document.querySelector(".get-started");

for (let i = 0; i < hiddenTextBox.length; i++) {
  boxQuestions[i].addEventListener("click", function () {
    hiddenTextBox[i].classList.toggle("hide");
    closeIconBtn[i].classList.toggle("hide");
    iconBtn[i].classList.toggle("hide");
  });
}

// input
const inputStarter = document.querySelector(".starter-input");
const inputBtn = document.querySelector(".header-button");

let displayMsg = function (msg) {
  let al = document.createElement("p");
  startSection.appendChild(al);
  al.setAttribute("class", "temporary");
  al.textContent = msg
};

inputBtn.addEventListener("click", function () {
  if (!inputStarter.value) {
    displayMsg("Please insert Your Email Address!");
  } else if (inputStarter.value) {
    displayMsg("Thank You!");
  }
});
