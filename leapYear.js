/**
 * year will be e leap year if the year is divisible by  4
 */
// SIMPLE LOGIC 

function isLeapYear(year){
    if (year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapyeaR = isLeapYear(2024)
// console.log(leapyeaR);



/**
1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
2. then it will be a leap year
*/
function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapYear = isLeapYear2(2023);
console.log(leapYear);