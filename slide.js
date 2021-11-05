const list = document.querySelector(".list");
const item = document.querySelectorAll(".item");
const btnNext = document.querySelector("btnNext");
const btnPrev = document.querySelector("btnPrev");
const pagination = document.querySelector("slidePagination");
const itemLen = item.length;
const slideWidth = 400;
const slideSpeed = 300;
let curIndex = 0;
let count = 0;

function moveSlide(num) {
    list.style.left = -num * 400 + "px";
    curIndex = num;
}

btnPrev.addEventListener("click", function () {
    if (curIndex !== 0) moveSlide(curIndex - 1);
});
btnNext.addEventListener("click", function () {
    if (curIndex !== itemLen - 1) moveSlide(curIndex + 1);
});
