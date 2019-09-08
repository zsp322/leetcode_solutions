/**
 * @param {number} n
 * @return {number}
 */

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
// Heap写法，先压进1， 然后每次poll顶端值，然后对其 * 2， *3， *5， 再压入HEAP,用一个HASHSET存已经存过的值， 防止duplicate
class Solution {
    public int nthUglyNumber(int n) {
        Queue<Long> heap = new PriorityQueue<Long>();
        HashSet<Long> set = new HashSet<>();
        Long[] primes = new Long[3];
        primes[0] = 2L;
        primes[1] = 3L;
        primes[2] = 5L;

        Long number = 1L;
        heap.offer(number);
        for (int i = 0; i < n; i++) {
            number = heap.poll();
            for (int j = 0; j < 3; j++) {
                Long nextNumber = number * primes[j];
                if (!set.contains(nextNumber)) {
                    heap.offer(nextNumber);
                    set.add(nextNumber);
                }
            }
        }
        return number.intValue();
    }
}

// O(N)解法
public int nthUglyNumber(int n) {
    int[] k = new int[n];
    int t2 = 0, t3 = 0, t5 = 0;

    k[0] = 1;
    for (int i = 1; i < n; i++) {
        k[i] = Math.min(k[t2] * 2, k[t3] * 2, k[t5] * 5);
        if (k[i] == k[t2] * 2) t2++;
        if (k[i] == k[t3] * 3) t3++;
        if (k[i] == k[t5] * 5) t5++;
    }
    return k[n - 1];
}