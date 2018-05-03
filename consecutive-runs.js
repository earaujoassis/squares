#!/usr/bin/env node

const findConsecutiveRuns = (arr, consecutives = 3) => {
    if (!arr || !arr.length) {
        return null;
    }

    const results = Array();
    const consecutivesCount = consecutives - 1;

    for (let i = 0; i < arr.length; i++) {
        let descending = true;
        let ascending = true;

        // check descending
        for (let j = i; j < i + consecutivesCount; j++) {
            if (arr[j + 1] !== arr[j] - 1) {
                descending = false;
                break;
            }
        }
        if (descending) {
            results.push(i);
        }

        // check ascending
        for (let j = i; j < i + consecutivesCount; j++) {
            if (arr[j + 1] !== arr[j] + 1) {
                ascending = false;
                break;
            }
        }
        if (ascending) {
            results.push(i);
        }
    }

    if (!results.length) {
        return null;
    }

    return results;
}

console.log(findConsecutiveRuns([1,2,3,5,10,9,8,9,10,11,7]));
