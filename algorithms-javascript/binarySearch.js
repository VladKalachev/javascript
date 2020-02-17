function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length /2);
    var middleElem = numArray[middleIdx];

    if(middleElem === key) return true;
    else if(middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.slice(middleIdx, numArray.length), key);
    }
    else if(middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.slice(0, middleIdx), key);
    }
    else return false;
}

function factorial(num) {
    if(num === 1) {
        return num;
    }
    else {
        return num * factorial(num -1)
    }
}

// test
// 4! = 4*3*2*1 = 24
// console.log(factorial(4));
// console.log(binarySearch([1,20, 2,3,44, 500, 2], 0));