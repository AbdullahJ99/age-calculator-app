//Button to calculate age
const calculateButton = document.querySelector(".calculate");
//Day input
const dayInput = document.querySelector(".day-input");
//Month input
const monthInput = document.querySelector(".month-input");
//Year input
const yearInput = document.querySelector(".year-input");
//Day error message
const dayError = document.querySelector(".day-error");
//Month error message
const monthError = document.querySelector(".month-error");
//Year error message
const yearError = document.querySelector(".year-error");

const getToday = () => {
    const today = new Date();
    const year = Number(today.getFullYear());
    const month = Number(today.getMonth() + 1);
    const day = Number(today.getDate());
    return [year, month, day];
}

calculateButton.addEventListener("click", function (e) {
    e.preventDefault();
    const year = Number(yearInput.value);
    const month = Number(monthInput.value);
    const day = Number(dayInput.value);
    validateYear(year);
    validateMonth(month);
    validateDay(day);
});

const validateYear = (input) => {
    if (input) {
        const today = getToday();
        if ((input > 0) && (input <= today[0])) {
            yearError.innerText = "";
            return 1;
        } else {
            yearError.innerText = "Please input a past year.";
            return 0;
        }
    } else {
        yearError.innerText = "Please input a year.";
        return -1;
    }
}

const validateMonth = (input) => {
    if (input) {
        if ((input > 0) && (input <= 12)) {
            monthError.innerText = "";
            return 1
        } else {
            monthError.innerText = "Please input a year between 1-12.";
            return 0;
        }
    } else {
        monthError.innerText = "Please input a month.";
        return -1;
    }
}

const validateDay = (input) => {
    if (input) {
        if ((input > 0) && (input <= 31)) {
            dayError.innerText = "";
            return 1
        } else {
            dayError.innerText = "Please input a day between 1-31.";
            return 0;
        }
    } else {
        dayError.innerText = "Please input a day.";
        return -1;
    }
}