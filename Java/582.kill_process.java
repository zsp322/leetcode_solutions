class Solution {
    public List<Integer> killProcess(List<Integer> pid, List<Integer> ppid, int kill) {
        HashMap<Integer, Integer> mappingForPID = new HashMap<>();
        HashMap<Integer, List<Integer>> mappingForPPID = new HashMap<>();
        for (int i = 0; i < pid.size(); i++) {
            mappingForPID.put(pid.get(i), i);
            // 这种initalization的做法不知道是不是可以
            mappingForPPID.put(ppid.get(i),
                               mappingForPPID
                                       .getOrDefault(ppid.get(i),
                                                     new ArrayList<>()).add(pid.get(i)));
        }

        Queue<Integer> queue = new LinkedList<>();
        queue.add(kill);
        List<Integer> res = new ArrayList<>();

        while (!queue.isEmpty()) {
            int currentPID = queue.poll();
            res.add(currentPID);
            List<Integer> dependencyMap = mappingForPPID.get(currentPID);

            if (dependencyMap == null) continue;
            for (int nextInteger : dependencyMap) {
                queue.add(nextInteger);
            }
        }

        return res;
    }
}