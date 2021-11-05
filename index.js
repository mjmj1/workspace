const list = document.querySelector(".list");
const item = document.querySelectorAll(".item");
const btnNext = document.querySelector("btnNext");
const btnPrev = document.querySelector("btnPrev");
const pagination = document.querySelector("slidePagination");
const itemLen = item.length;
const slideWidth = 400;
const slideSpeed = 300;

list.style.width = slideWidth * itemLen + "px";

let curIndex = 0;

slideBtnNext.addEventListener("click", function () {
    if (curIndex <= itemLen - 1) {
        list.style.transition = slideSpeed + "ms";
        list.style.transform =
            "translate3d(-" + slideWidth * (curIndex + 1) + "px, 0px, 0px)";
    } else {
        list.style.transform = "translate3d(0px, 0px, 0px)";
        curIndex = -1;
    }
    curSlide = item[++curIndex];
});
