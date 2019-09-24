/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars === null || chars.length === 0) return 0;

    let index = 0;
    let indexAns = 0;

    while (index < chars.length) {
        let currentCharacter = chars[index];

        let count = 0;

        while (index < chars.length && chars[index] === currentCharacter) {
            index++;
            count++;
        }

        chars[indexAns++] = currentCharacter;

        if (count > 1) {
            let countArrays = [...count.toString()];

            for (let countArray of countArrays) {
                chars[indexAns++] = countArray;
            }
        }
    }
    return indexAns;
};