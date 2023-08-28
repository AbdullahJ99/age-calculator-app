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
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const sinceToday = [year, month, day];
    return sinceToday;
}
console.log(calculateButton);
console.log(dayInput);
console.log(monthInput);
console.log(yearInput);

calculateButton.addEventListener("click", function(e){
    e.preventDefault();
    const year = yearInput.value;
    const month = monthInput.value;
    const day = dayInput.value;
    console.log(`${year}, ${month}, ${day}`);
});

const validateAll = (year, month, day) => {
    return [validateYear(year), validateMonth(month), validateDay(day)];
}

const validateYear = (input) => {
    const today = getToday();
    if(input > today[0]){
        return false;
    } else{
        return true;
    }
}

const validateMonth = (input) => {
    if (input > 12){
        return false;
    } else {
        return true;
    }
}