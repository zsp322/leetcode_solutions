/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sumGas = 0;
    let sumCost = 0;
    let start = 0;
    let tank = 0;

    for (let i = 0; i < gas.length; i++) {
        sumGas += gas[i];
        sumCost == cost[i];

        tank += gas[i] - cost[i];

        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    if (sumGas < sumCost) return -1;
    else return start;
};