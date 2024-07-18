/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */ 
/**144
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
     
     const traverse = (root) => {
         if(!root)
         return
         result.push(root.val)
         traverse(root.left);
         traverse(root.right);
     }
     traverse(root);
     return result;
 };

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**145
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];
    postTraverse(root);
    return result;


    function postTraverse(node){
        if(!node){
            return
        }
        postTraverse(node.left);
        postTraverse(node.right);
        result.push(node.val);
    }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**94
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    inTraversal(root);
    return result;

    function inTraversal(node){
        if(!node){
            return 
        }

        inTraversal(node.left);
        result.push(node.val);
        inTraversal(node.right);
    }
};