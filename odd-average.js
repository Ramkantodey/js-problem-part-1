/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

function oddAverage(numbers){
    const  odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum += number;
        aveg = sum / odds.length; 
    }
    return aveg;
}

const numbers = [ 42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log('average of the odd number is : ', avg);

