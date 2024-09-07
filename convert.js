// 12 ince 1 feet 

function inceToFeet(ince){
    const feet = ince / 12;
    return feet;
}

const shuvoHeight = inceToFeet(24);
// console.log(shuvoHeight);





function inceToFeet2(ince){
    const feetFraction  = ince / 12;
    const feetNumber = parseInt(feetFraction);
    const isRemaining = ince % 12;
    const result = feetNumber + ' ft ' + isRemaining + ' ince.'
    return result;
}

const shuvoHeight2 = inceToFeet2(75);
// console.log(shuvoHeight2);


function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const kilo = mileToKilometer(50);
// console.log(kilo);



function kilometerToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

const mile = kilometerToMile(50000000)
console.log(mile);