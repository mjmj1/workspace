const createDiv = document.querySelector(".createDiv");

createDiv.addEventListener("click", function () {
    let number = prompt("개수를 입력하세요 (최대 5)");
    if (number >= 1 && number <= 5) {
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const newDiv = document.createElement("div");
            const page = document.querySelector(".slidePagination");
            const newDot = document.createElement("li");
            const item = document.querySelectorAll(".item");
            const itemLen = item.length;
            let indexNum = itemLen;

            newDiv.setAttribute("class", "item");
            list.appendChild(newDiv);
            newDot.setAttribute("class", "dot");
            newDot.setAttribute("date-index", `${parseInt(indexNum) + 1}`);
            page.appendChild(newDot);
        }
    } else if (number < 1) {
        number = 1;
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const newDiv = document.createElement("div");
            const page = document.querySelector(".slidePagination");
            const newDot = document.createElement("li");
            const item = document.querySelectorAll(".item");
            const itemLen = item.length;
            let indexNum = itemLen;

            newDiv.setAttribute("class", "item");
            list.appendChild(newDiv);
            newDot.setAttribute("class", "dot");
            newDot.setAttribute("date-index", `${parseInt(indexNum) + 1}`);
            page.appendChild(newDot);
        }
    } else {
        number = 5;
        for (i = 0; i < number; i++) {
            const list = document.querySelector(".list");
            const newDiv = document.createElement("div");
            const page = document.querySelector(".slidePagination");
            const newDot = document.createElement("li");
            const item = document.querySelectorAll(".item");
            const itemLen = item.length;
            let indexNum = itemLen;

            newDiv.setAttribute("class", "item");
            list.appendChild(newDiv);
            newDot.setAttribute("class", "dot");
            newDot.setAttribute("date-index", `${parseInt(indexNum) + 1}`);
            page.appendChild(newDot);
        }
    }

    const list = document.querySelector(".list");
    const item = document.querySelectorAll(".item");
    const itemLen = item.length;
    const slideWidth = 400;

    list.style.width = slideWidth * itemLen + "px";
});
