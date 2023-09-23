



function validateDate(day, month, year){

    // check if the day is valid for the month, including leap years
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (month === 2){
        if (isLeapYear && (day < 1 || day > 29)){
            return false; // february in a leap year
        }
        else if (!isLeapYear && (day < 1 || day > 28)){
            return false; // february in a non-leap year
        }
    }
    else if ([4, 6, 9, 11].includes(month) && (day < 1 || day > 30)){
        return false // April, June, September, November
    }
    else if ((day < 1 || day > 31) || (month < 1 || month > 12)){
        return false;
    }
    return true;
}

function animateResult(finalNumber, elementId){
    const element = document.getElementById(elementId);
    element.textContent = "0"; // animation starts from 0

    const duration = 1000; // animation duration in milliseconds
    const steps = 240; // number off steps
    const stepValue = finalNumber / steps; // calculates the increment for each step based on the final number and then umber of steps
    let currentStep = 0;

    // main function that increments the value in each step and updates the elements content
    const interval = setInterval(function (){
        if (currentStep < steps) {
            currentStep++;
            element.textContent = Math.round(currentStep * stepValue).toString();
        }
        else{
            clearInterval(interval);
            element.textContent = finalNumber.toString();
        }
    }, duration / steps);
 
}
function calculateAge() {
    // takes input in string format
    const currentYear = new Date().getFullYear();
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    // takes input in int format
    const day = parseInt(dayInput.value)
    const month = parseInt(monthInput.value)
    const year = parseInt(yearInput.value)
    const dayError = document.getElementById("dayError");
    const monthError = document.getElementById("monthError");
    const yearError = document.getElementById("yearError");

    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";

    // check if any of the fields are empty
    if (dayInput.value === ""){
        dayError.textContent = "This field is required!";
        return;
    }

    if (monthInput.value === ""){
        monthError.textContent = "This field is required!";
        return;
    }

    if (yearInput.value === ""){
        yearError.textContent = "This field is required!";
        return;
    }

    if (!validateDate(day, month, year) || year < 1900 || year > currentYear){
        const currentYear = new Date().getFullYear();
        if ((day === 31 && [4, 6, 9, 11].includes(month)) || (day > 28 && month === 2 && !isLeapYear(year)) || ((day === 30 || day === 31) && month === 2)){
            dayError.textContent = "Must be a valid date";
        }
        else{
            if (day < 1 || day > 31){
                dayError.textContent = "Must be a valid day!";
            }
            if (month < 1 || month > 12){
                monthError.textContent = "Must be a valid month!";
            }   
            if (year < 1900 || year > currentYear){
                yearError.textContent = "Must be a valid year!";
            }        
        }   
        return;
    }

    function isLeapYear(year){
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // gets today and the birthdate and current year
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    // base in milliseconds
    const ageInMilliseconds = today - birthDate;

    // years + months + days
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor(ageInMilliseconds % ((365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor(ageInMilliseconds % ((30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // only months and only days
    const pureAgeInMonths = Math.floor(ageInYears * 12 + (today.getMonth() - birthDate.getMonth()));
    const pureAgeInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

    // years + days
    const ageYearsDaysYear = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const ageYearsDaysDayRest = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000))

    // years + months
    const ageYearsMonthsYear = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const ageYearsMonthsMonthRest = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

    // Months + days
    const ageMonthsDaysMonth = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
    const ageMonthsDaysDayRest =  Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000))

    // creates some variables for me to easily change the content in it
    const ageYearsSpan = document.getElementById("ageYears");
    const ageMonthsSpan = document.getElementById("ageMonths");
    const ageDaysSpan = document.getElementById("ageDays");

  

    // if statements for the different kind of combinations i can have for the outputs
    if (document.getElementById("showYears").checked && document.getElementById("showMonths").checked && document.getElementById("showDays").checked){
        
        count = 1;
        ageYearsSpan.textContent = "--";
        ageMonthsSpan.textContent = "--";
        ageDaysSpan.textContent = "--";
    }
    else if (document.getElementById("showYears").checked && document.getElementById("showDays").checked){
        
        count = 5
        ageYearsSpan.textContent = "--";
        ageMonthsSpan.textContent = "--";
        ageDaysSpan.textContent = "--";
    }
    else if (document.getElementById("showYears").checked && document.getElementById("showMonths").checked){
       
        count = 6
        ageYearsSpan.textContent = "--";
        ageMonthsSpan.textContent = "--";
        ageDaysSpan.textContent = "--";
    }
    else if (document.getElementById("showMonths").checked && document.getElementById("showDays").checked){
       
        count = 7
        ageYearsSpan.textContent = "--";
        ageMonthsSpan.textContent = "--";
        ageDaysSpan.textContent = "--";
    }
    else if (document.getElementById("showMonths").checked){
       
        count = 3;
        ageYearsSpan.textContent = "--";
        ageMonthsSpan.textContent = "--";
        ageDaysSpan.textContent = "--";
    }
    else if (document.getElementById("showYears").checked){
       
        count = 4;
        ageYearsSpan.textContent = "--";
        ageMonthsSpan.textContent = "--";
        ageDaysSpan.textContent = "--";
    }

    else if(document.getElementById("showDays").checked){
        
        count = 2;
        ageYearsSpan.textContent = "--";
        ageMonthsSpan.textContent = "--";
        ageDaysSpan.textContent = "--";
    }
    else{
        
        count = 1;
        ageYearsSpan.textContent = "--";
        ageMonthsSpan.textContent = "--";
        ageDaysSpan.textContent = "--";
    }
  
    // main switch statement that decides which output to be printed out
    switch(count){
        case 1:
            animateResult(ageInYears.toString(), "ageYears");
            animateResult(ageInMonths.toString(), "ageMonths");
            animateResult(ageInDays.toString(), "ageDays");   
            break;
        case 2:
            ageYearsSpan.textContent = "--";
            ageMonthsSpan.textContent = "--";
            animateResult(pureAgeInDays.toString(), "ageDays");
            break;
        case 3:
            ageYearsSpan.textContent = "--";
            animateResult(pureAgeInMonths.toString(), "ageMonths");
            ageDaysSpan.textContent = "--";
            break;
        case 4:
            animateResult(ageInYears.toString(), "ageYears");
            ageMonthsSpan.textContent = "--";
            ageDaysSpan.textContent = "-";
            break;
        case 5:
            animateResult(ageYearsDaysYear.toString(), "ageYears");
            ageMonthsSpan.textContent = "--";
            animateResult(ageYearsDaysDayRest.toString(), "ageDays");
            break;
        case 6:
            animateResult(ageYearsMonthsYear.toString(), "ageYears");
            animateResult(ageYearsMonthsMonthRest.toString(), "ageMonths");
            ageDaysSpan.textContent = "--";
            break;
        case 7:
            ageYearsSpan.textContent = "--";
            animateResult(ageMonthsDaysMonth.toString(), "ageMonths");
            animateResult(ageMonthsDaysDayRest.toString(), "ageDays");
            break;
    }
        

}