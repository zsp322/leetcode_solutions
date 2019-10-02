class UnionFind {
    constructor(size) {
        this.parent = new Array(size);
        for (let i = 0; i < this.parent.length; i++) {
            this.parent[i] = i;
        }
        this.rank = new Array(size).fill(0);
    }

    find(x) {
        if (this.parent[x] != x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let xr = this.find(x);
        let yr = this.find(y);

        if (xr === yr) return false; //Already connected
        else if (this.rank[xr] < this.rank[yr]) {
            this.parent[xr] = yr;
        } else if (this.rank[xr] > this.rank[yr]) {
            this.parent[yr] = xr;
        } else {
            this.parent[yr] = xr;
            this.rank[xr]++;
        }
        return true;
    }

}
