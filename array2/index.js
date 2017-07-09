
console.log('------------------------')
console.log('countEvens')

function countEvens(arr) {
    var ctr = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){ ctr += 1;}
    }
    return ctr;
}


console.log('countEvens([1, 2, 3]): ' + countEvens([1, 2, 3]))
console.log('countEvens([4, 5, 6]): ' + countEvens([4, 5, 6]))
console.log('countEvens([6, 8, 10]): ' + countEvens([6, 8, 10]))

console.log('------------------------')



console.log('------------------------')
console.log('fizzArr')

function fizzArr(num) {

    var retArr = [];

    for(var i = 1; i <= num; i++){
        retArr.push(i - 1)
    }
    return retArr;
}


console.log('fizzArr(5): ' + fizzArr(5))
console.log('fizzArr(3): ' + fizzArr(3))
console.log('fizzArr(0): ' + fizzArr(0))

console.log('------------------------')



console.log('------------------------')
console.log('fizzBuzz')

function fizzBuzz(a, b) {
    var retArr = [];

    for(var i = a; i < b; i++){
        if(i % 3 === 0 && i % 5 === 0){
            retArr.push('fizzbuzz')
        }
        else if(i % 3 === 0){
            retArr.push('fizz')
        }
        else if(i % 5 === 0){
            retArr.push('buzz')
        }
        else{
            retArr.push(i);
        }
    }

    return retArr;
}


console.log('fizzBuzz(1, 6): ' + fizzBuzz(1, 6))
console.log('fizzBuzz(1, 8): ' + fizzBuzz(1, 8))
console.log('fizzBuzz(1, 35): ' + fizzBuzz(1, 35))

console.log('------------------------')





console.log('------------------------')
console.log('maxSpan')

function maxSpan(arr) {

    if(arr.length === 1){ return 1;}

    //  found match, return distance
    if(arr[0] === arr[arr.length - 1]){
        return arr.length;
    }

    //  excluding last
    var exclLast = maxSpan(arr.slice(0, arr.length - 1))

    //  excluding first
    var exclFirst = maxSpan(arr.slice(1))



    return Math.max(exclFirst, exclLast);
}


console.log('maxSpan([1, 2, 1, 1, 3]): ' + maxSpan([1, 2, 1, 1, 3]))
console.log('maxSpan([1, 4, 2, 1, 4, 1, 4]): ' + maxSpan([1, 4, 2, 1, 4, 1, 4]))
console.log('maxSpan([1, 4, 2, 1, 4, 4, 4, 4]): ' + maxSpan([1, 4, 2, 1, 4, 4, 4, 4]))

console.log('------------------------')



console.log('------------------------')
console.log('seriesUp')

function seriesUp(num) {

    var retArr = [];

    for(var i = 1; i <= num; i++){

        for(var j = 1; j <= i; j++){
            retArr.push(j)
        }
    }

    return retArr;
}


console.log('seriesUp(3): ' + seriesUp(3))
console.log('seriesUp(4): ' + seriesUp(4))
console.log('seriesUp(2): ' + seriesUp(2))

console.log('------------------------')




console.log('------------------------')
console.log('leoT')

function leoT(arr) {

    var evens = [];
    var odds = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        }
        else{
            odds.push(arr[i])
        }
    }

    console.log(odds)

    return odds.sort(function(a, b){return a - b}).concat(evens.sort(function(a, b){return a - b}))


}


console.log('leoT([1, 2, 3, 4, 5]): ' + leoT([1, 2, 3, 4, 5]))
console.log('leoT([13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3]): ' + leoT([13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3]))
//console.log('leoT(4): ' + leoT(4))
//console.log('leoT(2): ' + leoT(2))

console.log('------------------------')




console.log('------------------------')
console.log('countClumps')

function countClumps(arr) {

    var numClumps = 0;
    var inClump = false;

    for(var i = 0; i < arr.length; i++){

        if(inClump && arr[i] !== arr[i-1]){
            inClump = false;
            numClumps++;
        }

        if(i > 0 && arr[i] === arr[i-1]){
            inClump = true;
        }

    }

    if(inClump){ numClumps++; }

    return numClumps;

}


console.log('countClumps([1, 2, 2, 3, 4, 4]): ' + countClumps([1, 2, 2, 3, 4, 4]))
console.log('countClumps([1, 1, 2, 1, 1]): ' + countClumps([1, 1, 2, 1, 1]))
console.log('countClumps([1, 1, 1, 1, 1]): ' + countClumps([1, 1, 1, 1, 1]))
//console.log('leoT(4): ' + leoT(4))
//console.log('leoT(2): ' + leoT(2))

console.log('------------------------')



