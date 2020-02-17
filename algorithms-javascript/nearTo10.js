// closestNumber

/**
 * Finds the nearest value in an array of numbers.
 * Example: nearestValue(array, 42)
 * 
 * @param {Array<number>} arr
 * @param {number} val the ideal value for which the nearest or equal should be found
 */
const nearestValue = (arr, val) => { 
    return arr.reduce((p, n) => (Math.abs(p) > Math.abs(n - val) ? n - val : p), Infinity) + val;
};

let values = [4, 15, 6, 2, 12, -9, 9];
// console.log(nearestValue(values, 10));