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
//Day title
const dayTitle = document.querySelector(".day-title");
//Month title
const monthTitle = document.querySelector(".month-title");
//Year title
const yearTitle = document.querySelector(".year-title");

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
    console.log(validateAll(year, month, day));
});

const validateYear = (input) => {
    if (input) {
        const today = getToday();
        if ((input > 0) && (input <= today[0])) {
            yearTitle.classList.remove("red-text");
            yearInput.classList.remove("red-border");
            yearError.innerText = "";
            return 1;
        } else {
            yearTitle.classList.add("red-text");
            yearInput.classList.add("red-border");
            yearError.innerText = "Please input a past year.";
            return 0;
        }
    } else {
        yearTitle.classList.add("red-text");
        yearInput.classList.add("red-border");
        yearError.innerText = "Please input a year.";
        return -1;
    }
}

const validateMonth = (input) => {
    if (input) {
        if ((input > 0) && (input <= 12)) {
            monthTitle.classList.remove("red-text");
            monthInput.classList.remove("red-border");
            monthError.innerText = "";
            return 1
        } else {
            monthTitle.classList.add("red-text");
            monthInput.classList.add("red-border");
            monthError.innerText = "Please input a month between 1-12.";
            return 0;
        }
    } else {
        monthTitle.classList.add("red-text");
        monthInput.classList.add("red-border");
        monthError.innerText = "Please input a month.";
        return -1;
    }
}

const validateDay = (input) => {
    if (input) {
        if ((input > 0) && (input <= 31)) {
            dayTitle.classList.remove("red-text");
            dayInput.classList.remove("red-border");
            dayError.innerText = "";
            return 1;
        } else {
            dayTitle.classList.add("red-text");
            dayInput.classList.add("red-border");
            dayError.innerText = "Please input a day between 1-31.";
            return 0;
        }
    } else {
        dayTitle.classList.add("red-text");
        dayInput.classList.add("red-border");
        dayError.innerText = "Please input a day.";
        return -1;
    }
}

const validateDayToMonth = (day, month) => {
    const months30 = [4, 6, 9, 11];
    const months31 = [1, 3, 5, 7, 8, 10, 12];
    if (months30.includes(month)) {
        if (day <= 30) {
            dayTitle.classList.remove("red-text");
            dayInput.classList.remove("red-border");
            dayError.innerText = "";
            return 1;
        } else {
            dayTitle.classList.add("red-text");
            dayInput.classList.add("red-border");
            dayError.innerText = "Must be a valid date.";
            return 0;
        }
    } else if (months31.includes(month)) {
        if (day <= 31) {
            dayTitle.classList.remove("red-text");
            dayInput.classList.remove("red-border");
            dayError.innerText = "";
            return 1;
        } else {
            dayTitle.classList.add("red-text");
            dayInput.classList.add("red-border");
            dayError.innerText = "Must be a valid date.";
            return 0;
        }
    } else {
        if (day <= 28) {
            dayTitle.classList.remove("red-text");
            dayInput.classList.remove("red-border");
            dayError.innerText = "";
            return 1;
        } else {
            dayTitle.classList.add("red-text");
            dayInput.classList.add("red-border");
            dayError.innerText = "Must be a valid date.";
            return 0;
        }
    }
}

const validateAll = (year, month, day) => {
    const validYear = validateYear(year);
    const validMonth = validateMonth(month);
    const validDay = validateDay(day);
    let dayToMonth = 0;
    if (validDay && validMonth){
       dayToMonth = validateDayToMonth(day,month);
    }
    return validYear && validMonth && validDay && dayToMonth;
}