export const create2DArray = function (rows, columns, val) {
    let matrix = new Array(rows).fill(val).map(() => new Array(columns).fill(val));
    return  matrix
}