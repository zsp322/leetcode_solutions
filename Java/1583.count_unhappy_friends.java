class Solution {
    public int unhappyFriends(int n, int[][] preferences, int[][] pairs) {
        int res = 0;

        HashMap<Integer, Integer> map = buildMap(pairs);

        for (int[] pair : pairs) {
            if (isHappy(pair[0], pair[1], preferences, map) != -1) res++;
            if (isHappy(pair[1], pair[0], preferences, map) != -1) res++;
        }
    }

    
    // x is unhappy if there exists u
    // u is preferred than y
    // x is preferred than v to u

    private int isHappy(int x, int y, int[][] preferences, HashMap<Integer, Integer> map){
    
        //sorted mates: 
        for (int u : preferences[x]) {

            if (u == y) return -1;

            int v = map.get(u);
            
            // v is u current pair

            // Loop u preference

            for (int mate : preferences[u]) {
                if (mate == x) return mate; // Since it's stable

                if (mate == v) break; // Since v is preferred before x
            }
        }
        //happy as it is
        return -1;
    }


    //helper to build bijection mapping
    private HashMap<Integer, Integer> buildHashMap(int[][] pairs){
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int[] pair : pairs){
            map.put(pair[0],pair[1]);
            map.put(pair[1],pair[0]);
        }
        return map;
    }
}