const createDiv = document.querySelector(".createDiv");

createDiv.addEventListener("click", function () {
    let number = prompt("개수를 입력하세요 (최대 5)");
    if (number >= 1 && number <= 5) {
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const newDiv = document.createElement("div");

            newDiv.setAttribute("class", "item");
            list.appendChild(newDiv);
        }
    } else if (number < 1) {
        number = 1;
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const newDiv = document.createElement("div");

            newDiv.setAttribute("class", "item");
            list.appendChild(newDiv);
        }
    } else {
        number = 5;
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const newDiv = document.createElement("div");

            newDiv.setAttribute("class", "item");
            list.appendChild(newDiv);
        }
    }
    makeClone();
    initfunction();
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

    list.style.width = slideWidth * (itemLen + 2) + "px";
    list.style.left = -slideWidth + "px";
}
