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

var TrieNode = function(){
    this.children = new Array(26).fill(null);
    this.isWord = false;
}