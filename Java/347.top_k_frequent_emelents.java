// Naive Solution: O(n) + O(logK) + O(K)

class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        List<Integer> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;

        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                map.put(nums[i], map.get(nums[i]) + 1);
            } else {
                map.put(nums[i], 1);
            }
        }



        PriorityQueue<Node> heap = new PriorityQueue<>(new Comparator<Node>() {
            @Override
            public int compare(Node a, Node b) {
                return a.getFrequency() - b.getFrequency();
            }
        });

        for (Map.Entry<Integer, Integer> entry: map.entrySet()) {
            Node node = new Node(entry.getKey(), entry.getValue());

            heap.add(node);
            if (heap.size() > k) {
                heap.poll();
            }
        }

        for (int i = 0; i < k; i++) {
            if (!heap.isEmpty()) res.add(heap.poll().getValue());
        }

        return res;
    }
}


class Node {
    private int value;
    private int frequency;

    public Node(int value, int frequency) {
        this.value = value;
        this.frequency = frequency;
    }

    public int getValue() {
        return this.value;
    }

    public int getFrequency() {
        return this.frequency;
    }
}



// Bucket Sort
// O(n) solution
class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {

        Map<Integer, Integer> numFrequency = new HashMap<>();

        for (int n : nums) {
            numFrequency.put(n, numFrequency.getOrDefault(n, 0) + 1);
        }

        List<Integer>[] frequencyBuckets = new List[nums.length + 1];

        for (int num : numFrequency.keySet()) {
            int frequency = numFrequency.get(num);
            if (frequencyBuckets[frequency] == null) {
                frequencyBuckets[frequency] = new ArrayList<>();
            }
            frequencyBuckets[frequency].add(num);
        }


        List<Integer> topK = new ArrayList<>();
        for (int freq = frequencyBuckets.length - 1; freq > 0; freq--) {
            List<Integer> frequencyBucket = frequencyBuckets[freq];

            if (frequencyBucket != null) {
                for (int i = 0; i < frequencyBucket.size() && topK.size() < k; i++)
                    topK.add(frequencyBucket.get(i));
            }
        }

        return topK;
    }
}

