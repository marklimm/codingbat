console.log('------------------------')
console.log('countXX')

function countXX(str, num) {

    var count = 0;
    var i = 0;
    for (i = 0; i < str.length - 1; i++) {

        if (str[i] === 'x' && str[i + 1] === 'x') {
            count++;
        }
    }

    return count;

}


console.log('countXX("abcxx"): ' + countXX("abcxx"))
console.log('countXX("xxx"): ' + countXX("xxx"))
console.log('countXX("xxxx"): ' + countXX("xxxx"))

console.log('------------------------')

console.log('------------------------')
console.log('doubleX')

function doubleX(str, num) {

    var count = 0;
    var i = 0;
    for (i = 0; i < str.length - 1; i++) {

        if (str[i] === 'x') {
            return str[i + 1] === 'x';
        }
    }

    return false;

}


console.log('doubleX("axxbb"): ' + doubleX("axxbb"))
console.log('doubleX("axaxax"): ' + doubleX("axaxax"))
console.log('doubleX("xxxxx"): ' + doubleX("xxxxx"))

console.log('------------------------')



console.log('------------------------')
console.log('stringSplosion')

function stringSplosion(str) {

    if(str.length === 0){ return '' }

    return stringSplosion(str.slice(0, str.length - 1)) + str;

}


console.log('stringSplosion("Code"): ' + stringSplosion("Code"))
console.log('stringSplosion("abc"): ' + stringSplosion("abc"))
console.log('stringSplosion("ab"): ' + stringSplosion("ab"))

console.log('------------------------')



console.log('------------------------')
console.log('stringMatch')

function stringMatch(a, b) {

    var length = Math.min(a.length, b.length)

    var count = 0;
    var i = 0;
    for(i = 0; i < length - 1; i++){

        if(a[i] === b[i] && a[i + 1] == b[i + 1]){
            count++;
        }
    }

    return count;
}


console.log('stringMatch("xxcaazz", "xxbaaz"): ' + stringMatch("xxcaazz", "xxbaaz"))
console.log('stringMatch("abc", "abc"): ' + stringMatch("abc", "abc"))
console.log('stringMatch("abc", "axc"): ' + stringMatch("abc", "axc"))


console.log('------------------------')


console.log('------------------------')
console.log('stringX')

function stringX(str) {

    var stringToRemoveXsFrom = str.slice(1, str.length - 1);

    return str[0] + stringToRemoveXsFrom.replace(/x/g, '') + str[str.length - 1]

}


console.log('stringX("xxHxix"): ' + stringX("xxHxix"))
console.log('stringX("abxxxcd"): ' + stringX("abxxxcd"))
console.log('stringX("xabxxxcdx"): ' + stringX("xabxxxcdx"))

console.log('------------------------')



console.log('------------------------')
console.log('altPairs')

function altPairs(str) {

    var returnStr = '';
    var desiredIndexes = [0, 1, 4, 5, 8, 9]

    var i;
    for(i = 0; i < str.length; i++){
        if(desiredIndexes.indexOf(i) > -1){
            returnStr += str[i];
        }
    }

    return returnStr;
}


console.log('altPairs("kitten"): ' + altPairs("kitten"))
console.log('altPairs("Chocolate"): ' + altPairs("Chocolate"))
console.log('altPairs("CodingHorror"): ' + altPairs("CodingHorror"))

console.log('------------------------')



console.log('------------------------')
console.log('array667')

function array667(str) {

    var count = 0;
    for(i = 0; i < str.length - 1; i++){
        if(str[i] === 6){
            if(str[i + 1] === 6 || str[i + 1] === 7){
                count++;
            }
        }
    }

    return count;
}


console.log('array667([6, 6, 2]): ' + array667([6, 6, 2]))
console.log('array667([6, 6, 2, 6]): ' + array667([6, 6, 2, 6]))
console.log('array667([6, 7, 2, 6]): ' + array667([6, 7, 2, 6]))

console.log('------------------------')




