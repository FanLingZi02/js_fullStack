DOM 树 有html结构 再加上CSS DOM树将被生成。静态页面就有了。document  DOMContentLoaded有了元素节点，就可以做js交互了
页面上还依赖于其他的一些资源 js，阻塞下载，img 是网页性能的杀手
window.onload 此时写js 就晚了

如果不等事件的发生  js操作有可能无效