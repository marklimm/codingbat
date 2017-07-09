/**
 * Created by mark on 5/19/2016.
 */


console.log('start of warmup-1')
console.log('http://codingbat.com/java/Warmup-1')


console.log('------------------------')
console.log('sleepIn')

function sleepIn(weekday, vacation) {

    return !weekday || vacation;
}



console.log('sleepIn(false, false): ' + sleepIn(false, false))
console.log('sleepIn(true, false): ' + sleepIn(true, false))
console.log('sleepIn(false, true): ' + sleepIn(false, true))
console.log('------------------------')


console.log('------------------------')
console.log('monkeyTrouble')

function monkeyTrouble(aSmile, bSmile) {

    return aSmile === bSmile
}



console.log('monkeyTrouble(true, true): ' + monkeyTrouble(true, true))
console.log('monkeyTrouble(false, false): ' + monkeyTrouble(false, false))
console.log('monkeyTrouble(true, false): ' + monkeyTrouble(true, false))
console.log('------------------------')



console.log('------------------------')
console.log('sumDouble')

function sumDouble(a, b) {

    if(a === b){
        return (a + b) * 2
    }
    else{
        return a + b;
    }
}



console.log('sumDouble(1, 2): ' + sumDouble(1, 2))
console.log('sumDouble(3, 2): ' + sumDouble(3, 2))
console.log('sumDouble(2, 2): ' + sumDouble(2, 2))
console.log('------------------------')



console.log('------------------------')
console.log('nearHundred')

function nearHundred(num) {

    const distanceFrom100 = Math.abs(100 - num)
    const distanceFrom200 = Math.abs(200 - num)

    return distanceFrom100 <= 10 || distanceFrom200 <= 10;
}



console.log('nearHundred(93): ' + nearHundred(93))
console.log('nearHundred(90): ' + nearHundred(90))
console.log('nearHundred(89): ' + nearHundred(89))
console.log('------------------------')



console.log('------------------------')
console.log('notString')

function notString(str) {

    if(str.startsWith('not ')){
        return str;
    }
    else{
        return 'not ' + str
    }

}



console.log('notString(\'candy\'): ' + notString('candy'))
console.log('notString(\'x\'): ' + notString('x'))
console.log('notString(\'not bad\'): ' + notString('not bad'))
console.log('------------------------')




console.log('------------------------')
console.log('missingChar')

function missingChar(str, indexToRemove) {

    const firstPart = str.slice(0, indexToRemove)

    const lastPart = str.slice(indexToRemove + 1)

    return firstPart + lastPart

}



console.log('missingChar("kitten", 1): ' + missingChar("kitten", 1))
console.log('missingChar("kitten", 0): ' + missingChar("kitten", 0))
console.log('missingChar("kitten", 4): ' + missingChar("kitten", 4))

console.log('------------------------')




console.log('------------------------')
console.log('frontBack')

function frontBack(str) {

    if(str.length <= 1){
        return str;
    }
    else{
        return str[str.length - 1] +
            frontBack(str.slice(1, str.length - 1)) +
            str[0];
    }


}



console.log('frontBack("code"): ' + frontBack("code"))
console.log('frontBack("a"): ' + frontBack("a"))
console.log('frontBack("ab"): ' + frontBack("ab"))

console.log('------------------------')

console.log('------------------------')
console.log('front3')

function front3(str) {

    var front;
    if (str.length <= 3) {
        front = str;
    }
    else {

        front = str.slice(0, 3);

    }

    return front + front + front;
}



console.log('front3("Java"): ' + front3("Java"))
console.log('front3("Chocolate"): ' + front3("Chocolate"))
console.log('front3("abc"): ' + front3("abc"))

console.log('------------------------')


console.log('------------------------')
console.log('or35')

function or35(number) {


    return (number % 3 === 0) || (number % 5 === 0)
}



console.log('or35(3): ' + or35(3))
console.log('or35(10): ' + or35(10))
console.log('or35(8): ' + or35(8))

console.log('------------------------')


console.log('------------------------')
console.log('in1020')

function in1020(a, b) {

    return (a >= 10 && a <= 20) || (b >=10 && b <= 20)


}



console.log('in1020(12, 99): ' + in1020(12, 99))
console.log('in1020(21, 12): ' + in1020(21, 12))
console.log('in1020(8, 99): ' + in1020(8, 99))

console.log('------------------------')



console.log('------------------------')
console.log('lastDigit')

function lastDigit(a, b) {

    return b % 10 === a


}



console.log('lastDigit(7, 17): ' + lastDigit(7, 17))
console.log('lastDigit(6, 17): ' + lastDigit(6, 17))
console.log('lastDigit(3, 113): ' + lastDigit(3, 113))

console.log('------------------------')

console.log('------------------------')
console.log('everyNth')

function everyNth(str, num) {

    var returnStr = '';

    var i = 0;
    for(i = 0; i < str.length; i++){
        if(i % num === 0){
            returnStr += str[i];
        }
    }

    return returnStr;


}



console.log('everyNth("Miracle", 2): ' + everyNth("Miracle", 2))
console.log('everyNth("abcdefg", 2): ' + everyNth("abcdefg", 2))
console.log('everyNth("abcdefg", 3): ' + everyNth("abcdefg", 3))

console.log('------------------------')



