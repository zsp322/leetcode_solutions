/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if (moves === null || moves.length === 0) return true;
    let pos = [0,0];
    for (let i = 0; i < moves.length; i++) {

        if (moves[i] === 'U') {
            pos[1] += 1;
        }
        if (moves[i] === 'D') {
            pos[1] -= 1;
        }
        if (moves[i] === 'L') {
            pos[0] -= 1;
        }
        if (moves[i] === 'R') {
            pos[0] += 1;
        }
    }

    return pos[0] === 0 && pos[1] === 0;
};