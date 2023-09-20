



function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    // base 
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

    const ageYearsSpan = document.getElementById("ageYears");
    const ageMonthsSpan = document.getElementById("ageMonths");
    const ageDaysSpan = document.getElementById("ageDays");
    
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
  

    switch(count){
        case 1:
            ageYearsSpan.textContent = ageInYears;
            ageMonthsSpan.textContent = ageInMonths;
            ageDaysSpan.textContent = ageInDays;
            break;
        case 2:
            ageYearsSpan.textContent = "--";
            ageMonthsSpan.textContent = "--";
            ageDaysSpan.textContent = pureAgeInDays;
            break;
        case 3:
            ageYearsSpan.textContent = "--";
            ageMonthsSpan.textContent = pureAgeInMonths;
            ageDaysSpan.textContent = "--";
            break;
        case 4:
            ageYearsSpan.textContent = ageInYears;
            ageMonthsSpan.textContent = "--";
            ageDaysSpan.textContent = "-";
            break;
        case 5:
            ageYearsSpan.textContent = ageYearsDaysYear;
            ageMonthsSpan.textContent = "--";
            ageDaysSpan.textContent = ageYearsDaysDayRest;
            break;
        case 6:
            ageYearsSpan.textContent = ageYearsMonthsYear;
            ageMonthsSpan.textContent = ageYearsMonthsMonthRest;
            ageDaysSpan.textContent = "--";
            break;
        case 7:
            ageYearsSpan.textContent = "--";
            ageMonthsSpan.textContent = ageMonthsDaysMonth;
            ageDaysSpan.textContent = ageMonthsDaysDayRest;
            break;
    }
        

}