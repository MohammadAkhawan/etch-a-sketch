const userInputElement = document.querySelector("#user-input");
const generateBtnElement = document.querySelector("#generate");

const bigContainerElement = document.querySelector(".container");

const checkNumberIsValid = (input) => {
    if (userInputElement.value === "") {
        alert("You Should Enter a Number!");
        return false;
    } else if (input > 100 || input < 1) {
        alert("You Should Enter a Number Between 1 and 100");
        return false;
    }
    return true;
};

const emptyDiv = bigContainerElement.innerHTML;

const generateTable = () => {
    let userInput = Number(userInputElement.value);

    if (checkNumberIsValid(userInput)) {
        bigContainerElement.innerHTML = emptyDiv;
        let userInputNumber = userInput ** 2;
        while (userInputNumber > 0) {
            const divElement = document.createElement("div");
            divElement.classList.add("the-divs");
            bigContainerElement.appendChild(divElement);
            userInputNumber--;
        }
        userInputElement.value = "";
    }
};

generateBtnElement.addEventListener("click", generateTable);
