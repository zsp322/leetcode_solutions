var minAreaRect = function(points) {
    if (points === null || points.length === 0) return 0;
    let dic = [];
    for (let point of points) {
        if (dic.has(point[0])) {
            dic.get(point[0]).push(point[1]);
        } else {
            dic.set(point[0], []);
        }
    }

    let res = Number.MAX_SAFE_INTEGER;

    for (let point1 of points) {
        for (let point2 of points) {
            if (point1[0] === point2[0]
               || point[1] === point2[1] ) continue;

            if (dic.get(point1[0]).includes(point2[0])
                && dic.get(point1[1]).includes(point2[1])) {
                let area = Math.abs(point1[0] - point2[0]) * Math.abs(point1[1] - point2[1]);
                min = Math.min(area, res);
            }
        }
    }

    return res;
};
