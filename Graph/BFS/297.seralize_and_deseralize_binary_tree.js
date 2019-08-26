/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) return '';
    let queue = [root];
    let res = [];
    
    while (queue.length > 0) {
    	let node = queue.shift();
    	if (node === null) {
    		res += 'n ';
    		continue;
    	} 
    	res += node.val + ' ';
    	queue.push(node.left);
    	queue.push(node.right);
    }

    // console.log(res)
    return res;
};




/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === '' || data === ' ') return null;
    
    // console.log(data)
    let values = data.split(" ");
    // console.log(values.length)
    let root = new TreeNode(parseInt(values[0])); 
    let queue = [root];
   

   for (let i = 1;i < values.length; i++) {
       
       let parent = queue.shift();
       if ( values[i] !== 'n' && values[i] != '') {
           let leftNode = new TreeNode(parseInt(values[i]));
           parent.left = leftNode;
           queue.push(leftNode);
       }

       if (values[++i] !== 'n' && i < values.length) {
       	   let rightNode = new TreeNode(parseInt(values[i]));
           
       	   parent.right = rightNode;
       	   queue.push(rightNode);
       }
   }

   return root;

};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */