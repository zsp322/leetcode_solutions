// Time Complexity: O(M \times N)O(M×N), where MM is the length of words and NN is the total number of words in the input word list. Finding out all the transformations takes MM iterations for each of the NN words. Also, breadth first search in the worst case might go to each of the NN words.
//
// Space Complexity: O(M \times N)O(M×N), to store all MM transformations for each of the NN words, in the all_combo_dict dictionary. Visited dictionary is of NN size. Queue for BFS in worst case would need space for all NN words.

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    let visited = new Set();
    let queue = [];
    queue.push(beginWord);
    visited.add(beginWord);

    let steps = 1;

    while (queue.length > 0) {
        let level = queue.length;

        for (let m = 0; m < level; m++) {
            let curWord = queue.shift();
            if (curWord === endWord) return steps;
            visited.add(curWord);


            for (let i = 0; i < curWord.length; i++) {
                for (let j = 0; j < alphabets.length; j++) {
                    let charArr = curWord.split('');
                    charArr[i] = alphabets[j];
                    const newWord = charArr.join('');

                    if (!visited.has(newWord) && wordList.includes(newWord)) queue.push(newWord);
                }
            }

        }
        steps++;
    }


    return 0;
};
