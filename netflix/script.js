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
