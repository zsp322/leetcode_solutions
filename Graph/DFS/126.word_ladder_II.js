var findLadders = function(beginWord, endWord, wordList) {
    let res = [];
    let dic = new Map();
    bfs(endWord, wordList, dic);
    dfs(res, beginWord, [beginWord], wordList, endWord, dic, beginWord);
    return res;
};


const bfs = function(word, wordList, dic) {
   let queue = [word];
   let level = 0;
   let visited = new Set();
   dic.set(word, 0);
   while (queue.length > 0) {
       let size = queue.length;
       level++;
       for (let i = 0; i < size; i++) {
           let curWord = queue.shift();
           let nextWordList = computeNextWord(curWord, wordList);


           for (let j = 0; j < nextWordList.length; j++) {
               if (dic.has(nextWordList[j])) continue;
               queue.push(nextWordList[j]);
               dic.set(nextWordList[j], level);
           }
       }
   }
}

const dfs = function(res,
                     curWord,
                     curPath,
                     wordList,
                     endWord,
                     dic,
                     beginWord) {
    if (curWord === endWord) {
        res.push(curPath.slice(0, curPath.length));
        return;
    } else {
        let nextWordList = computeNextWord(curWord, wordList);
        // console.log(nextWordList);
        for (let j = 0; j < nextWordList.length; j++) {
            let nextWord = nextWordList[j];
            if (curPath.includes(nextWord)) continue;

            // Start word is in the list
            if ((dic.has(nextWord)
                 && dic.has(curWord)
                 && dic.get(nextWord) + 1 === dic.get(curWord))
                || (curWord === beginWord && !dic.has(beginWord))) {
                curPath.push(nextWord);
                dfs(res, nextWord, curPath, wordList, endWord, dic, beginWord);
                curPath.pop();
            }
        }
    }
}


const computeNextWord = function(word, wordList) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let dic = new Set(wordList);
    let res = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            let charArr = word.split('');
            charArr[i] = alphabets[j];
            const newWord = charArr.join('');

            if (dic.has(newWord) && !res.includes(newWord)) res.push(newWord);
        }
    }
    return res;
}
