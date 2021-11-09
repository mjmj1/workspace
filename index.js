const createDiv = document.querySelector(".createDiv");
//create 버튼 이벤트
createDiv.addEventListener("click", function () {
    let number = prompt("개수를 입력하세요 (최대 5)");

    if (number >= 1 && number <= 5) {
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const pages = document.querySelector(".pages");
            const newDiv = document.createElement("div");
            const newLi = document.createElement("li");

            newDiv.setAttribute("class", "item");
            newLi.setAttribute("class", "dot");
            newLi.setAttribute("data-index", i);
            list.appendChild(newDiv);
            pages.appendChild(newLi);
        }
    } else if (number > 5) {
        number = 5;
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const pages = document.querySelector(".pages");
            const newDiv = document.createElement("div");
            const newLi = document.createElement("li");

            newDiv.setAttribute("class", "item");
            newLi.setAttribute("class", "dot");
            newLi.setAttribute("data-index", i);
            list.appendChild(newDiv);
            pages.appendChild(newLi);
        }
    } else {
        number = 1;
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const pages = document.querySelector(".pages");
            const newDiv = document.createElement("div");
            const newLi = document.createElement("li");

            newDiv.setAttribute("class", "item");
            newLi.setAttribute("class", "dot");
            newLi.setAttribute("data-index", i);
            list.appendChild(newDiv);
            pages.appendChild(newLi);
        }
    }

    makeClone();
    initfunction();
    pages();
    createDiv.remove();
});

function makeClone() {
    const item = document.querySelectorAll(".item");
    const list = document.querySelector(".list");

    let cloneSlide_first = item[0].cloneNode(true);
    let cloneSlide_last = list.lastElementChild.cloneNode(true);

    list.append(cloneSlide_first);
    list.insertBefore(cloneSlide_last, list.firstElementChild);
}

function initfunction() {
    const list = document.querySelector(".list");
    const item = document.querySelectorAll(".item");
    const itemLen = item.length;
    const slideWidth = 400;

    document.querySelector(".btnBox").style.visibility = "visible";
    list.style.width = slideWidth * (itemLen + 2) + "px";
    list.style.left = -slideWidth + "px";
}

function pages() {
    const dot = document.querySelectorAll(".dot");

    console.log(dot);
    for (const dots of dot) {
        dots.addEventListener("click", function () {
            let index = dots.getAttribute("data-index");

            if (index != curIndex) {
                moveSlide(index, 1);
                curIndex = index;
            }
            console.log(moveSlide());
            console.log(curIndex);
        });
    }
}
//슬라이드 버튼 이벤트
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
        moveSlide(curIndex, 2);
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

function moveSlide(num, sum) {
    const list = document.querySelector(".list");
    const slideWidth = 400;

    if (sum == true) {
        list.style.left = -(num + sum) * slideWidth + "px";
        list.style.transition = `${0.3}s ease-out`;
    } else {
        list.style.left = -num * slideWidth + "px";
        list.style.transition = `${0.3}s ease-out`;
    }
}
