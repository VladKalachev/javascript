function meanMedianMode(array) {
    // call other 3 function
    // return obj which has mean, median, mode
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    };
}

function getMean(array) {
    var sum = 0;

    array.forEach(num => {
        sum += num;
    });

    var main = sum / array.length;
    return main;
}

function getMedian(array) {
    array.sort(function(a, b) {return a -b});
    var median;

    if(array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
    }
    else {
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[array.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
}

function getMode(array) {
    var modeObj = {};

    array.forEach(num => {
        if(!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    var maxFrequence = 0;
    var modes = [];
    for(var num in modeObj) {
        if(modeObj[num] > maxFrequence) {
            modes = [ num ];
            maxFrequence = modeObj[num];
        }
        else if (modeObj[num] === maxFrequence ) modes.push(num);
    }

    if(modes.length === Object.keys(modeObj).length) modes = [];

    return modes;
}

// test
// console.log(meanMedianMode([1,2,3,4,5,4,6,1]));