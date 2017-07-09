
console.log('------------------------')
console.log('shareDigit')

function shareDigit(a, b) {


    const aLeftDigit = Math.floor(a / 10);
    const aRightDigit = a % 10;

    const bLeftDigit = Math.floor(b / 10);
    const bRightDigit = b % 10;


    return (aLeftDigit === bLeftDigit || aLeftDigit === bRightDigit) ||
        (aRightDigit === bLeftDigit || aRightDigit === bRightDigit)
}


console.log('shareDigit(12, 23): ' + shareDigit(12, 23))
console.log('shareDigit(12, 43): ' + shareDigit(12, 43))
console.log('shareDigit(12, 44): ' + shareDigit(12, 44))

console.log('------------------------')



console.log('------------------------')
console.log('sumLimit')

function sumLimit(a, b) {


    const lengthOfA = a.toString().length;

    var result = a + b;

    if(result.toString().length > lengthOfA){
        return a
    }
    else{
        return result;
    }
}


console.log('sumLimit(2, 3): ' + sumLimit(2, 3))
console.log('sumLimit(8, 3): ' + sumLimit(8, 3))
console.log('sumLimit(8, 1): ' + sumLimit(8, 1))

console.log('------------------------')

