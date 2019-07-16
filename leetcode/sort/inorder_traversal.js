//      1
//  null  2
//      3
// 中序遍历 一棵树 递归的概念
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
a1.right = a2;
a1.left = null;
a2.left = a3;

//     root
//   left   right
// left1  right1
// 中序遍历 左子树 根节点 右子树
//         1
//     2        3
// 4      5   6     7
// 4251637 (左中右)

var inorderTraversal = function (root) {
  let arr = [];
  const inorder = root => {
    if(root === null) return null;
    inorder(root.left); //递归遍历左子树

    arr.push(root.val); //将结点的值存入数组中
    inorder(root.right); //递归遍历右子树
  }
  inorder(root);
  return arr;
}
console.log(inorderTraversal(a1));