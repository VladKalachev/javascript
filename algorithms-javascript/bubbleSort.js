function bubbleSort(array) {
    // return array, sorted with biible sort
    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
           if(array[j] > array[j + 1]) {
               var temp = array[j];
               array[j] = array[j + 1];
               array[j + 1] = temp;
           } 
        } 
    }

    return array;
}

// test
// console.log(bubbleSort([10, 3, 0, -1]))
// console.log(bubbleSort([5, 3, 8, 2, 1, 4]))