const userInputElement = document.querySelector("#user-input");
const generateBtnElement = document.querySelector("#generate");

const bigContainerElement = document.querySelector(".container");

const emptyDiv = bigContainerElement.innerHTML;

const checkNumberIsValid = (input) => {
    if (userInputElement.value === "") {
        alert("You Should Enter a Number!");
        return false;
    } else if (input > 100 || input < 2) {
        alert("You Should Enter a Number Between 2 and 100");
        return false;
    }
    return true;
};

const selectedDiv = (div) => {
    div.addEventListener("click", () => {
        div.classList.toggle("dark-background");
    });
};

const setElementsOfTable = (size) => {
    let tableSize = size ** 2;
    while (tableSize > 0) {
        const divElement = document.createElement("div");
        divElement.classList.add("the-divs");
        let divWidth = 960 / size;
        divElement.style.width = `${divWidth}px`;
        bigContainerElement.appendChild(divElement);
        selectedDiv(divElement);
        tableSize--;
    }
};

const generateTable = () => {
    let userInput = Number(userInputElement.value);

    if (checkNumberIsValid(userInput)) {
        bigContainerElement.innerHTML = emptyDiv;

        setElementsOfTable(userInput);
    }
    userInputElement.value = "";
    userInputElement.focus();
};

generateBtnElement.addEventListener("click", generateTable);
