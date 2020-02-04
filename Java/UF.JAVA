public Class UF {
    private int[] father;
    private int count = 0;
    public UF(int N) {
        father = new int[N];
        count = N;
        for (int i = 0; i < father.length; i++) {
            father[i] = i;
        }
    }

    public void union(int p, int q) {
        int pId = find(p);
        int qId = find(q);

        if (pId == qId) return;

        for (int i = 0; i < father.length; i++) {
            if (father[i] == pId) father[i] = qId;
        }
        count--;
    }

    public int find(int p) {
        return father[p];
    }

    public boolean isConnected(int p, int q) {
        return find(p) == find(q);
    }

    public int count() {
        return count;
    }
}