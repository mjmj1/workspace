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
        moveSlideNext(curIndex);
        console.log(itemLen);
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
    console.log(curIndex);
});
btnPrev.addEventListener("click", function () {
    const item = document.querySelectorAll(".item");
    const itemLen = item.length;
    const slideWidth = 400;

    if (curIndex >= 0) {
        moveSlidePrev(curIndex);
        console.log(itemLen);
    }
    if (curIndex === 0) {
        setTimeout(function () {
            const list = document.querySelector(".list");

            list.style.left = -(itemLen - 2) * slideWidth + "px";
            list.style.transition = `${0}s ease-out`;
        }, 500);
        curIndex = itemLen - 2;
    }
    curIndex -= 1;
    console.log(curIndex);
});

function moveSlideNext(num) {
    const list = document.querySelector(".list");
    const slideWidth = 400;

    list.style.left = -(num + 2) * slideWidth + "px";
    list.style.transition = `${0.3}s ease-out`;
}

function moveSlidePrev(num) {
    const list = document.querySelector(".list");
    const slideWidth = 400;

    list.style.left = -num * slideWidth + "px";
    list.style.transition = `${0.3}s ease-out`;
}
