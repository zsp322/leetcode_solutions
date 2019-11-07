// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
//     Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
//     You may assume nums1 and nums2 cannot be both empty.
//
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 这道题就属于拿到完全没思路的，肯定需要2刷的
// 看了上次写的答案才写出来

var findMedianSortedArrays = function(nums1, nums2) {
    let k1 = Math.floor((nums1.length + nums2.length + 1) / 2);
    let k2 = Math.floor((nums1.length + nums2.length + 2) / 2);

    let res1 = findKthElement(nums1, 0, nums2, 0, k1);
    let res2 = findKthElement(nums1, 0, nums2, 0, k2);

    return (res1 + res2) / 2.0;
};


const findKthElement = function(nums1, i, nums2, j, k) {
    if (i > nums1.length) return nums2[j + k - 1];
    if (j > nums2.length) return nums1[i + k - 1];

    let tempK = Math.floor(k / 2);

    let median1 = i + tempK - 1 < nums1.length ? nums1[i + tempK - 1] : Math.MAX_SAFE_INTEGER;
    let median2 = j + tempK - 1 < nums2.length ? nums2[j + tempK - 1] : Math.MAX_SAFE_INTEGER;

    if (median1 < median2) {
        return findKthElement(nums1, i + tempK, nums2, j, k - tempK);
    } else {
        return findKthElement(nums1, i, nums2, j + tempK, k -tempK);
    }
}