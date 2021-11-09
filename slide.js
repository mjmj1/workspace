const btnNext = document.querySelector(".btnNext");
const btnPrev = document.querySelector(".btnPrev");
const slideSpeed = 300;
let curIndex = 0;

btnNext.addEventListener("click", function () {
    const item = document.querySelectorAll(".item");
    const itemLen = item.length;
    const slideWidth = 400;
    console.log("click");

    if (curIndex <= itemLen - 1) {
        moveSlide(curIndex + 2);
    }
    if (curIndex === itemLen - 3) {
        setTimeout(function () {
            const list = document.querySelector(".list");

            list.style.left = -slideWidth + "px";
            list.style.transition = `${0}s ease-out`;
        }, 500);
        curIndex = -1;
    }
    curIndex += 1;
});

btnPrev.addEventListener("click", function () {
    const item = document.querySelectorAll(".item");
    const itemLen = item.length;
    const slideWidth = 400;

    console.log("click");
    if (curIndex >= 0) {
        moveSlide(curIndex);
    }
    if (curIndex == 0) {
        setTimeout(function () {
            const list = document.querySelector(".list");

            list.style.left = -(itemLen - 2) * slideWidth + "px";
            list.style.transition = `${0}s ease-out`;
        }, 500);
        curIndex = itemLen - 2;
    }
    curIndex -= 1;
});

function moveSlide(num) {
    const list = document.querySelector(".list");
    const slideWidth = 400;

    list.style.left = -num * slideWidth + "px";
    list.style.transition = `${0.3}s ease-out`;
}
