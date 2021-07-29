// Date: 11-25-2019
// Tag: Heap
// 这道题在amazon面试的时候也做到了，是这道题的变种

class Solution {
    public int minMeetingRooms(int[][] intervals) {
        if (intervals == null || intervals.length == 0) return 0;

        Arrays.sort(intervals, new Comparator<int[]>(){
            @Override
            public int compare(int[] a, int[] b) {
                if (a[0] == b[0]) return a[1] - b[1];
                return a[0] - b[0];
            }
        });

        // 用一个heap当作simulator,heap按着end time排序
        PriorityQueue<int[]> heap = new PriorityQueue<>(new Comparator<int[]>() {
            @Override
            public int compare(int[] a, int[] b) {
                return a[1] - b[1];
            }
        });

        for (int[] interval : intervals) {
            if (!heap.isEmpty()) {
                int[] lastInterval = heap.peek(); //The earliest meeting finished
                if (lastInterval[1] <= interval[0]) {
                    heap.poll();
                }
            }
            heap.offer(interval);
        }

        return heap.size();
    }
}