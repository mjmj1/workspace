const btnNext = document.querySelector(".btnNext");
const btnPrev = document.querySelector(".btnPrev");
const slideSpeed = 300;
let curIndex = 0;
let count = 0;

btnNext.addEventListener("click", function () {
    const item = document.querySelectorAll(".item");
    const itemLen = item.length;
    const slideWidth = 400;

    if (curIndex <= itemLen - 1) {
        moveSlide(curIndex);
    }
    if (curIndex === count - 1) {
        setTimeout(function () {
            list.style.left = -slideWidth + "px";
            list.style.transition = `${0}s ease-out`;
        }, 500);
        curIndex = -1;
    }
    curIndex += 1;
});
btnPrev.addEventListener("click", function () {
    if (curIndex >= 0) {
        list.style.left = -curIndex;
    }
    moveSlide(curIndex - 1);
});

function moveSlide(num) {
    const list = document.querySelector(".list");
    const slideWidth = 400;

    list.style.left = -(num + 2) * slideWidth + "px";
    list.style.transition = `${0.5}s ease-out`;
    curIndex = num;
}
