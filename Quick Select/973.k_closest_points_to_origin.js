var kClosest = function(points, K) {
    quickSelect(points, K, 0, points.length - 1);

    let result = [];
    for (let i = 0; i < K; i++) {
        result.push(points[i]);
    }
    return result;
};

var quickSelect = function (points, k, start, end) {
    if (start >= end) return;

    let left = start;
    let right = end;
    let mid = Math.floor((start + end) / 2);
    let pivot = points[mid];

    while (left <= right) {
        while (left <= right && isSmaller(points[left], pivot)) left++;
        while (left <= right && isLarger(points[right], pivot)) right--;

        if (left <= right) {
            swap(points, left, right);
            left++;
            right--;
        }
    }

    if (k <= right) quickSelect(points, k, start, right);
    if (k >= left) quickSelect(points, k, left, end);

}

var swap = function(points, l1, l2) {
    let temp = points[l1];
    points[l1] = points[l2];
    points[l2] = temp;
}

var isLarger = function(p1, p2) {
    return p1[0] * p1[0] + p1[1] * p1[1] > p2[0] * p2[0] + p2[1] * p2[1];
}

var isSmaller = function(p1, p2) {
    return p1[0] * p1[0] + p1[1] * p1[1] < p2[0] * p2[0] + p2[1] * p2[1];
}