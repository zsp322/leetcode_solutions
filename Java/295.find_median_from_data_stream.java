// 一开始的想法是用LINKEDLIST存储所有的nodes with value，然后FINDMEDIAN就是找中值
// 看了SOLUTION之后有个更巧妙的做法是用TWO HEAP, max heap 和 min heap分别存值，并且保证两个HEAP balance each other
class MedianFinder {
    private PriorityQueue<Integer> minHeap;
    // Store all values bigger than top element from max heap
    private PriorityQueue<Integer> maxHeap;
    // Store all values smaller than top element from min heap, make sure maxHeap size is larger than min heap
    private int size;
    /** initialize your data structure here. */
    public MedianFinder() {
        minHeap = new PriorityQueue<>();
        maxHeap = new PriorityQueue<>(new Comparator<Integer>(){
            @Override
            public int compare(Integer a, Integer b) {
                return b.intValue() - a.intValue();
            }
        });
        size = 0;
    }

    public void addNum(int num) {
        maxHeap.offer(num);
        minHeap.offer(maxHeap.poll());

        if (minHeap.size() > maxHeap.size()) {
            maxHeap.offer(minHeap.poll());
        }
        size++;
    }

    public double findMedian() {
        return size % 2 == 0 ? (maxHeap.peek() + minHeap.peek()) / 2.0 : (double)maxHeap.poll();
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
//1. If all integer numbers from the stream are between 0 and 100, how would you optimize it?
//    We can maintain an integer array of length 100 to store the count of each number along with a total count. Then, we can iterate over the array to find the middle value to get our median.
//    Time and space complexity would be O(100) = O(1).
//2. If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?
//    In this case, we need an integer array of length 100 and a hashmap for these numbers that are not in [0,100].