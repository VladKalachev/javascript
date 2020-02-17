function reverseArrayInPlace(arr) {
    // reverse arr
    // return reversed arr
    for (var i = 0; i < arr.length / 2; i++) {
        var tempVar = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempVar;
    }
    return arr;
}

// test
// console.log(reverseArrayInPlace([1,2,3]));
// console.log(reverseArrayInPlace(['A','B','C']));