class Solution {
    public int minMeetingRooms(int[][] intervals) {
        if (intervals.length === 0) return 0;

        PriorityQueue<Integer> queue = new PriorityQueue<Integer>(
                intervals.length,
                new Comparator<Integer>() {
                    public int compare(Integer a, Integer b) {
                        return a - b;
                    }
                }
        )
        Arrays.sort(intervals,
                new Comparator<Interval>() {
                    public int compare(Interval a, Interval b) {
                        return a.start - b.start;
                    }
        })

        allocator.add(Intervals[0].end);

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i].start > allocator.peek()) {
                allocator.poll();
            }

            allocator.add(intervals[i].end);
        }

        return allocator.size();
    }
}