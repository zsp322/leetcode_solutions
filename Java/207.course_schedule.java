// Topological Sort的经典题
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // 建立NODE-DEGREE的表格
        HashMap<Integer, List<Integer>> startNodeToEndNode = new HashMap<>();
        HashMap<Integer, Integer> degree = new HashMap<>();

        // [1, 0] => to take class 1 you have to finish 0
        for (int i = 0; i < prerequisites.length; i++) {
            int startNode = prerequisites[i][1]; //The class you have to take
            int endNode = prerequisites[i][0]; //The class you can take after finish

            if (startNodeToEndNode.containsKey(startNode)) {
                List<Integer> correspondNodes = startNodeToEndNode.get(startNode);
                correspondNodes.add(endNode);
                startNodeToEndNode.put(startNode, correspondNodes);
            } else {
                List<Integer> correspondNodes = new ArrayList<>();
                correspondNodes.add(endNode);
                startNodeToEndNode.put(startNode, correspondNodes);
            }

            if (degree.containsKey(endNode)) {
                degree.put(endNode, degree.get(endNode) + 1);
            } else {
                degree.put(endNode, 1);
            }
        }

        Queue<Integer> queue = new LinkedList<>();
        // Add node which degree is 0 into the queue as starting points
        for (int i = 0; i < numCourses; i++) {
            if (!degree.containsKey(i)) queue.add(i);
        }
        // 我感觉这个visited数组可能是不需要的
        // boolean[] visited = new boolean[numCourses];

        int courseFinished = 0;
        while (!queue.isEmpty()) {
            int course = queue.poll();
            // visited[course] = true;
            courseFinished++;
            if (!startNodeToEndNode.containsKey(course)) continue;
            for (Integer courseNowCanTake : startNodeToEndNode.get(course)) {

                degree.put(courseNowCanTake, degree.get(courseNowCanTake) - 1);
                if (degree.get(courseNowCanTake) == 0) {
                    queue.add(courseNowCanTake);
                }
            }
        }
        return courseFinished == numCourses;
    }
}