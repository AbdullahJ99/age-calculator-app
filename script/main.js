//Button to calculate age
const calculateButton = document.querySelector(".calculate");
//Day input
const dayInput = document.querySelector(".day-input");
//Month input
const monthInput = document.querySelector(".month-input");
//Year input
const yearInput = document.querySelector(".year-input");

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
});

const validateYear = (input) => {
    if (input) {
        const today = getToday();
        if ((input > 0) && (input <= today[0])) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return -1;
    }
}

const validateMonth = (input) => {
    if (input) {
        if ((input > 0) && (input <= 12)) {
            return 1
        } else {
            return 0;
        }
    } else {
        return -1;
    }
}

const validateDay = (input) => {
    if (input) {
        if ((input > 0) && (input <= 31)) {
            return 1
        } else {
            return 0;
        }
    } else {
        return -1;
    }
}