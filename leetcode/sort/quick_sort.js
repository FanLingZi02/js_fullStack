// 快排，
// 抽象 a b(女神) c 一次
// [8, 2, 5(女神), 9, 7]
// 递归
function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  var left = [],
  right = [],
  // 取剩下数组的中间数（四舍五入）round向下取
  baseDot = Math.round(arr.length / 2),
  // baseDot下标 然后抽出base
  base = arr.splice(baseDot, 1)[0];
  // 剩下数组和base比较
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < base) {
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }
  // left a
  // base 中间值
  // right b
  return quickSort(left).concat([base], quickSort(right));
}


console.log(quickSort([8, 2, 5, 9, 7]));