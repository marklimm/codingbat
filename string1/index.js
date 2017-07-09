
console.log('------------------------')
console.log('middleTwo')

function middleTwo(str) {

    var middleIndex = (str.length / 2) - 1;

    return str[middleIndex] + str[middleIndex + 1]
}


console.log('middleTwo("string"): ' + middleTwo("string"))
console.log('middleTwo("code"): ' + middleTwo("code"))
console.log('middleTwo("Practice"): ' + middleTwo("Practice"))

console.log('------------------------')



console.log('------------------------')
console.log('without2')

function without2(str) {

    var start = str.slice(0, 2);

    if(start === str.slice(str.length - 2, str.length)){
        return str.slice(2, str.length)
    }

    return str
}


console.log('without2("HelloHe"): ' + without2("HelloHe"))
console.log('without2("HelloHi"): ' + without2("HelloHi"))
console.log('without2("Hi"): ' + without2("Hi"))

console.log('------------------------')


console.log('------------------------')
console.log('withoutX2')

function withoutX2(str) {

    var returnStr = ''
    if(str[0] === 'x'){

    }
    else{
        returnStr += str[0]
    }

    if(str[1] === 'x'){

    }
    else{
        returnStr += str[1]
    }

    return returnStr + str.slice(2, str.length)
    //
    //
    //var i
    //for(i = 1; i >= 0; i--){
    //    if(str[i] === 'x'){
    //        str = str.slice(i + 1, i + 2)
    //    }
    //}

    return str;
    //  doesn't work
    //var start = str.slice(0, 2);
    //
    //start = start.replace(/x/g, '');
    //
    //return start + str;
    //
    //
}


console.log('withoutX2("xHi"): ' + withoutX2("xHi"))
console.log('withoutX2("Hxi"): ' + withoutX2("Hxi"))
console.log('withoutX2("Hi"): ' + withoutX2("Hi"))

console.log('------------------------')

