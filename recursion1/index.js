

console.log('------------------------')
console.log('factorial')

function factorial(num) {

    if(num === 1){ return num}

    return num * factorial(num - 1)
}


console.log('factorial(1): ' + factorial(1))
console.log('factorial(2): ' + factorial(2))
console.log('factorial(3): ' + factorial(3))

console.log('------------------------')


console.log('------------------------')
console.log('bunnyEars')

function bunnyEars(num) {


    if(num === 0){ return num; }

    return 2 + bunnyEars(num - 1)
}


console.log('bunnyEars(0): ' + bunnyEars(0))
console.log('bunnyEars(1): ' + bunnyEars(1))
console.log('bunnyEars(2): ' + bunnyEars(2))

console.log('------------------------')


console.log('------------------------')
console.log('fibonacci')

function fibonacci(num) {

    if(num === 0){ return 0;}
    if(num === 1){ return 1; }

    return fibonacci(num - 1) + fibonacci(num - 2)
}


console.log('fibonacci(0): ' + fibonacci(0))
console.log('fibonacci(1): ' + fibonacci(1))
console.log('fibonacci(2): ' + fibonacci(2))
console.log('fibonacci(3): ' + fibonacci(3))
console.log('fibonacci(4): ' + fibonacci(4))

console.log('------------------------')



console.log('------------------------')
console.log('bunnyEars2')

function bunnyEars2(num) {

    if(num === 0){ return 0; }

    var currEars = 0;
    if(num % 2 === 0){ currEars = 3; }
    else { currEars = 2; }

    return currEars + bunnyEars(num - 1)
}


console.log('bunnyEars2(0): ' + bunnyEars2(0))
console.log('bunnyEars2(1): ' + bunnyEars2(1))
console.log('bunnyEars2(2): ' + bunnyEars2(2))


console.log('------------------------')


console.log('------------------------')
console.log('triangle')

function triangle(num) {

    if(num === 0){ return 0; }
    if(num === 1){ return 1; }

    return num + triangle(num - 1)
}


console.log('triangle(0): ' + triangle(0))
console.log('triangle(1): ' + triangle(1))
console.log('triangle(2): ' + triangle(2))


console.log('------------------------')



console.log('------------------------')
console.log('sumDigits')

function sumDigits(num) {

    if(num === 0){ return 0; }

    var currDigit = num % 10

    return currDigit + sumDigits(Math.floor(num / 10))
}


console.log('sumDigits(126): ' + sumDigits(126))
console.log('sumDigits(49): ' + sumDigits(49))
console.log('sumDigits(12): ' + sumDigits(12))


console.log('------------------------')



console.log('------------------------')
console.log('count7')

function count7(num) {

    if(num === 0){ return 0;}

    var currCount = 0;

    if(num % 10 === 7){ currCount = 1; }
    else { currCount = 0; }


    return currCount + count7(Math.floor(num / 10))
}


console.log('count7(717): ' + count7(717))
console.log('count7(7): ' + count7(7))
console.log('count7(123): ' + count7(123))


console.log('------------------------')



console.log('------------------------')
console.log('count8')

function count8(num) {

    if(num === 0){ return 0;}

    var currCount = 0;

    if(num % 10 === 8){
        currCount = 1;

        var restOfDigit = Math.floor(num / 10);
        var nextDigit = restOfDigit % 10;
        if(nextDigit === 8){

            //  2nd in a row counts double
            currCount += 2;

            return currCount + count8(Math.floor(restOfDigit / 10))
        }

    }
    else {
        currCount = 0;
    }


    return currCount + count8(Math.floor(num / 10))
}


console.log('count8(8): ' + count8(8))
console.log('count8(818): ' + count8(818))
console.log('count8(8818): ' + count8(8818))

console.log('------------------------')



console.log('------------------------')
console.log('powerN')

function powerN(base, n) {

    if(n === 1){ return base;}

    return base * powerN(base, n - 1)
}


console.log('powerN(3, 1): ' + powerN(3, 1))
console.log('powerN(3, 2): ' + powerN(3, 2))
console.log('powerN(3, 3): ' + powerN(3, 3))

console.log('------------------------')



console.log('------------------------')
console.log('countX')

function countX(str) {

    if(str.length === 0){ return 0; }

    var currCount = 0;
    if(str[str.length - 1] === 'x'){
        currCount ++;
    }

    return currCount + countX(str.slice(0, str.length - 1))
}


console.log('countX("xxhixx"): ' + countX("xxhixx"))
console.log('countX("xhixhix"): ' + countX("xhixhix"))
console.log('countX("hi"): ' + countX("hi"))

console.log('------------------------')



console.log('------------------------')
console.log('countHi')

function countHi(str) {

    if(str.length === 0 || str.length === 1){ return 0; }

    var currCount = 0;
    if(str.slice(str.length - 2, str.length) === 'hi'){
        currCount++;
    }

    return currCount + countHi(str.slice(0, str.length - 1))
}


console.log('countHi("xxhixx"): ' + countHi("xxhixx"))
console.log('countHi("xhixhix"): ' + countHi("xhixhix"))
console.log('countHi("hi"): ' + countHi("hi"))

console.log('------------------------')



console.log('------------------------')
console.log('changeXY')

function changeXY(str) {

    if(str.length === 0){ return ''}

    var curr = ''
    if(str[0] === 'x'){
        curr = 'y'
    }
    else{
        curr = str[0];
    }



    return curr + changeXY(str.slice(1, str.length))
}

console.log('changeXY("codex"): ' + changeXY("codex"))
console.log('changeXY("xxhixx"): ' + changeXY("xxhixx"))
console.log('changeXY("xhixhix"): ' + changeXY("xhixhix"))

console.log('------------------------')


console.log('------------------------')
console.log('changePi')

function changePi(str) {

    if(str.length === 0){ return ''}
    if(str.length === 1){ return str[0]}

    //var currPair = str.slice(0, 2)

    if(str[0] === 'p'){
        if(str[1] === 'i'){
            return '3.14' + changePi(str.slice(2, str.length))
        }
        else{
            return 'p' + str[1] + changePi(str.slice(2, str.length))
        }
    }
    else{
        return str[0] + changePi(str.slice(1, str.length));
    }


}

console.log('changePi("xpix"): ' + changePi("xpix"))
console.log('changePi("pipi"): ' + changePi("pipi"))
console.log('changePi("pip"): ' + changePi("pip"))

console.log('------------------------')

console.log('------------------------')
console.log('array6')

function array6(arr, index) {

    if(index === arr.length){ return false;}

    var currResult = false;

    if(arr[index] === 6){ currResult = true;}


    return currResult || array6(arr, index + 1)
}

console.log('array6([1, 6, 4], 0): ' + array6([1, 6, 4], 0))
console.log('array6([1, 4], 0): ' + array6([1, 4], 0))
console.log('array6([6], 0): ' + array6([6], 0))

console.log('------------------------')

console.log('------------------------')
console.log('allStar')

function allStar(str) {


    if(str.length === 0){ return "";}
    else if(str.length === 1){ return str;}

    else if(str.length === 2){ return str[0] + '*' + str[1];}
    else if(str.length === 3){ return str[0] + '*' + str[1] + '*' + str[2];}

    var firstPart = str.slice(0, Math.ceil(str.length / 2.0));
    var secondPart = str.slice(Math.ceil(str.length / 2.0));
    //console.log('firstPart: ' + firstPart)
    //console.log('secondPart: ' + secondPart)

    return allStar(firstPart) + '*' + allStar(secondPart);
}

console.log('allStar("hello"): ' + allStar("hello"))
console.log('allStar("abc"): ' + allStar("abc"))
console.log('allStar("ab"): ' + allStar("ab"))
console.log('allStar("yyyaaaaaasssssss"): ' + allStar("yyyaaaaaasssssss"))

console.log('------------------------')


console.log('------------------------')
console.log('countPairs')

function countPairs(str) {

    if(str.length < 3){ return 0; }
    if(str.length === 3){
        if(str[0] === str[2] && str[0] !== str[1]){
            return 1;
        }
        else{
            return 0;
        }
    }

    var firstPart = str.slice(0, 3);
    var secondPart = str.slice(1, str.length);
    console.log('firstPart: ' + firstPart)
    console.log('secondPart: ' + secondPart)

    //  total the first 3 chars plus shifted over by one
    return countPairs(firstPart) + countPairs(secondPart);
}

console.log('countPairs("axa"): ' + countPairs("axa"))
console.log('countPairs("axax"): ' + countPairs("axax"))
console.log('countPairs("axbx"): ' + countPairs("axbx"))
console.log('countPairs("AxAxA"): ' + countPairs("AxAxA"))

console.log('------------------------')


console.log('------------------------')
console.log('count11')

function count11(str) {

    if(str.length < 2){ return 0; }

    if(str.length === 2){
        return str === '11' ? 1 : 0;
    }

    if(str.length === 3){
        return str.indexOf('11') > -1 ? 1 : 0
    }

    var firstPart = str.slice(0, Math.ceil(str.length / 2.0));
    var secondPart = str.slice(Math.ceil(str.length / 2.0));
    //console.log('firstPart: ' + firstPart)
    //console.log('secondPart: ' + secondPart)

    return count11(firstPart) + count11(secondPart);


}

console.log('count11("11abc11"): ' + count11("11abc11"))
console.log('count11("abc11x11x11"): ' + count11("abc11x11x11"))
console.log('count11("111"): ' + count11("111"))
console.log('count11("a11a1"): ' + count11("a11a1"))

console.log('------------------------')
