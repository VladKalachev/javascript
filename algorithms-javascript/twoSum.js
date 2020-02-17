function twoSum(numArray, sum) {
    // return every pair of numbers from 'numArray'
    // that adds up to the 'sum'
    var pairs = [];
    var hashtable = [];

    for (let i = 0; i < numArray.length; i++) {
       var currName = numArray[i];
       var counterpart = sum - currName;
       if(hashtable.indexOf(counterpart) !== -1) {
           pairs.push([currName, counterpart]);
       }
       hashtable.push(currName);
    }

    return pairs;
}

// numArray = [1,6,4,5,3,3] sum = 7
// result = [[6,1], [3,4], [3,4]]

// test
// console.log(twoSum([1,6,4,5,3,3], 7));
// console.log(twoSum([40, 11, 19, 17, -12], 28));