
function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor(ageInMilliseconds % ((365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor(ageInMilliseconds % ((30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    const ageYearsSpan = document.getElementById("ageYears");
    const ageMonthsSpan = document.getElementById("ageMonths");
    const ageDaysSpan = document.getElementById("ageDays");

    ageYearsSpan.textContent = ageInYears;
    ageMonthsSpan.textContent = ageInMonths;
    ageDaysSpan.textContent = ageInDays;
}