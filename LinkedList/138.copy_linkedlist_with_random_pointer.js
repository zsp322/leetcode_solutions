
var A = [3,1,2,4,5];

console.log(helperMergeSort(A));

function helperMergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var mid = Math.floor((arr.length)/2);

    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid, arr.length);

    const left = helperMergeSort(leftArray);
    const right = helperMergeSort(rightArray);

    return merge(left, right);

}

function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}


