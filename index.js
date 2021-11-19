const createImg = document.querySelector(".createImg");
const btnNext = document.querySelector(".btnNext");
const btnPrev = document.querySelector(".btnPrev");
const slideSpeed = 300;
let curIndex = 0;

//create 버튼 이벤트
createImg.addEventListener("click", function () {
    let number = 0;
    number = prompt("개수를 입력하세요 (최대 5)");

    sessionStorage.setItem("value", number);
    if (!sessionStorage.getItem("value")) {
        sessionStorage.removeItem("value");
    }
});

let stay = sessionStorage.getItem("value");
session(stay);

function session(number) {
    if (number >= 1 && number <= 5) {
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const pages = document.querySelector(".pages");
            const newImg = document.createElement("iframe");
            const newLi = document.createElement("li");

            newImg.setAttribute("class", "item");
            newImg.src = `http://localhost:8080/img${i + 1}`;
            newLi.setAttribute("class", "dot");
            newImg.setAttribute("scrolling", "no");
            newImg.setAttribute("align", "middle");
            newLi.setAttribute("data-index", i);
            list.appendChild(newImg);
            pages.appendChild(newLi);
        }
    } else if (number > 5) {
        number = 5;
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const pages = document.querySelector(".pages");
            const newImg = document.createElement("iframe");
            const newLi = document.createElement("li");

            newImg.setAttribute("class", "item");
            newImg.src = `http://localhost:8080/img${i + 1}`;
            newLi.setAttribute("class", "dot");
            newImg.setAttribute("scrolling", "no");
            newImg.setAttribute("align", "middle");
            newLi.setAttribute("data-index", i);
            list.appendChild(newImg);
            pages.appendChild(newLi);
        }
    } else if (number < 0) {
        alert("1 이상 숫자만 입력하세요");
    }

    try {
        makeClone();
        initfunction();
        pages();
        pagination();
    } catch (e) {
        console.log("대기중");
    }
}

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

    for (const dots of dot) {
        dots.addEventListener("click", function () {
            let index = Number(dots.getAttribute("data-index"));

            if (index != curIndex) {
                moveSlide(index + 1);
                curIndex = index;
            }
            pagination();
        });
    }
}
function pagination() {
    const dot = document.querySelectorAll(".dot");
    const dotLen = dot.length;

    let index = Number(dot[curIndex].getAttribute("data-index"));
    let name = "active";
    dot[index].classList.add(name);
    for (let i = 0; i < index; i++) {
        dot[i].classList.remove(name);
    }
    for (let i = index + 1; i < dotLen; i++) {
        dot[i].classList.remove(name);
    }
}
//슬라이드 버튼 이벤트

btnNext.addEventListener("click", function () {
    const item = document.querySelectorAll(".item");
    const itemLen = item.length;
    const slideWidth = 400;

    if (curIndex <= itemLen - 1) {
        moveSlide(curIndex + 2);
    }
    if (curIndex === itemLen - 3) {
        setTimeout(function () {
            const list = document.querySelector(".list");

            list.style.left = -slideWidth + "px";
            list.style.transition = `${0}s ease-out`;
        }, slideSpeed);
        curIndex = -1;
    }
    curIndex += 1;
    pagination();
});

btnPrev.addEventListener("click", function () {
    const item = document.querySelectorAll(".item");
    const itemLen = item.length;
    const slideWidth = 400;

    if (curIndex >= 0) {
        moveSlide(curIndex);
    }
    if (curIndex == 0) {
        setTimeout(function () {
            const list = document.querySelector(".list");

            list.style.left = -(itemLen - 2) * slideWidth + "px";
            list.style.transition = `${0}s ease-out`;
        }, slideSpeed);
        curIndex = itemLen - 2;
    }
    curIndex -= 1;
    pagination();
});

function moveSlide(num) {
    const list = document.querySelector(".list");
    const slideWidth = 400;

    list.style.left = -num * slideWidth + "px";
    list.style.transition = `${0.3}s ease-out`;
}

//upload
