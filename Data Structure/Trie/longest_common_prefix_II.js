// Make sure there is no duplicate
let longestCommonPrefix = function(words) {
    if (words === null || word.length === 0) return "";
    let trie = new Trie();
    for (let word of words) {
      trie.insert(word);
    }

    return findLongestCommonPrefix;

}


var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    let a = 'a';
    for (let i = 0; i < word.length; i++) {
        let num = word.charCodeAt(i) - a.charCodeAt(0);
        // console.log(num)
        if (node.children[num] === null) {
            node.children[num] = new TrieNode();
        }
        node = node.children[num];
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root;
    let a = 'a';
    for (let i = 0;i < word.length; i++) {
        let pos = word.charCodeAt(i) - a.charCodeAt(0);
        if (cur.children[pos] === null) {
            return false;
        }
        cur = cur.children[pos];
    }
    return cur.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;
    let a = 'a';
    for (let i = 0;i < prefix.length; i++) {
        let pos = prefix.charCodeAt(i) - a.charCodeAt(0);
        if (cur.children[pos] === null) {
            return false;
        }
        cur = cur.children[pos];
    }
    return true;
};

Trie.prototype.findLongestCommonPrefix = function() {
    let cur = this.root;
    let a = 'a';
    let queue = [];
    queue.push([root, ""]);
    let longestCommonPrefix = "";

    while (queue.length > 0) {
        let curCombo = queue.pop();
        let cur = curCombo[0];
        let combination = curCombo[1];

        longestCommonPrefix = longestCommonPrefix.length >= combination.length ? longestCommonPrefix : combination;
        for (let child of cur.children) {
            if (child.size > half) {
                combination += child.val;
                queue.push([child, combination]);
            }
        }
    }

    return longestCommonPrefix;
}

var TrieNode = function(){
    this.children = new Array(26).fill(null);
    this.isWord = false;
}
