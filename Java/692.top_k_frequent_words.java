class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        HashMap<String, Integer> freqMap = new HashMap<>();
        for (int i = 0; i < words.length; i++) {
            freqMap.put(words[i], freqMap.getOrDefalut(words[i], 0) + 1);
        }

        // O(n)
        PriorityQueue<Map.Entry> pq = new PriorityQueue<>(k, new Comparator<Map.Entry>() {
            @Override
            public int compare(Map.Entry a, Map.Entry b) {
                return a.getValue() == b.getValue() ? b.getKey() - a.getKey() : a.getValue() - b.getValue();
            }
        });

        // O(logK)
        for (Map.Entry<String, Integer> entry : freqMap.entrySet()) {
            pq.add(entry);

            if (pq.size() > k) {
                pq.poll();
            }
        }

        // O(K)
        List<String> res = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            res.add(pq.poll());
        }

        return res;
    }
}