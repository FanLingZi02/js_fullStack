# BFC是一个什么概论
block Formatting Context (块级格式化上下文)

#BFC的原理（渲染规则）
1. 正常的文档流会存在边距折叠的问题（父子元素，兄弟元素），水平方向的外边距不存在折叠的情况（因为水平方向不存在块级元素）
2. BFC容器不会与浮动元素的box重叠
3. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔离的空间，外面的元素不会影响BFC容器里面的元素，反之，里面的元素也不会影响BFC容器外面的元素
4. 计算BFC容器的高度时，浮动元素也会参加高度计算（也是通常清除浮动的原理）

#创建BFC的条件
为了便于理解，我们换一种方式来重新定义BFC。一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可：
1. float的值不是none。
2. position的值不是static或者relative。
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4. overflow的值不是visible

js原理 css原理 BFC原理
