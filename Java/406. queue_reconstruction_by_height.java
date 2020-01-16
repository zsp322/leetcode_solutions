class Solution {
    public int[][] reconstructQueue(int[][] people) {
        if (people == null || people.length == 0) return people;

        people.sort(people, new Comparator<int[]>() {
            @Override
            public int compare(int[] a, int[] b) {
                return b[0] - a[0];
            }
        });

        List<int[]> res = new ArrayList<>();
        for (int[] p : people) {
            res.add(p[1], p);
        }

        int n = people.length;
        return res.toArray(new int[n][2]);
    }
}