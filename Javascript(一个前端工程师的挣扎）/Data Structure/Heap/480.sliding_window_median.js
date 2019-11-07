/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let minHeap = [];
let maxHeap = [];

var medianSlidingWindow = function(nums, k) {
   let n = nums.length -k + 1;

   if (n <= 0) return new [0];

   for (let i = 0; i <= nums.length; i++) {
       if (i >= k) {
           result[i - k] = getMedian();
           remove(nums[i - k]);
       }
       if (i < nums.length) {
           add(nums[i]);
       }
   }

   return result;
};


var add = function(num) {
    if (num < getMedian()) {
        maxHeap.add(num);
    } else {
        minHeap.add(num);
    }

    if (maxHeap.size() > minHeap.size()) {
        minHeap.add(maxHeap.poll());
    }

    if (minHeap.size() > (maxHeap.size() + 1)) {
        maxHeap.add(minHeap.poll());
    }
}

var remove = function (num) {
    if (num < getMedian()) {
        maxHeap.remove(num);
    } else {
        minHeap.remove(num);
    }

    if (maxHeap.size() > minHeap.size()) {
        minHeap.add(maxHeap.poll());
    }

    if (minHeap.size() > (maxHeap.size() + 1)) {
        maxHeap.add(minHeap.poll());
    }
}

var getMedian = function () {
    if (maxHeap.isEmpty() && minHeap.isEmpty()) return 0;

    if (maxHeap.size() == minHeap.size()) {
        return (maxHeap.peek() + minHeap.peek()) / 2.0;
    } else {
        return minHeap.peek();
    }
}

