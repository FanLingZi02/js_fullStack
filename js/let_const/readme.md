# 作用域 Scope
document DOM
  getElementsByTagName
  getElementsClassName
  querySelector
  querySelectorAll
  window BOM 
    全局定义了 var name="flz";
    全局变量 前端 js window
    局部变量 function() {}
    <!-- window.dl 是通过自变量去找 报错是undefined
    dl是用语法去查找 
    两者报错是不同的 -->
    window js是一个内嵌在浏览器中的脚本语言，它与其他语言不一样的地方在于他有一个顶级的window
    全局变量挂载在window上
    console.log（name）；console.log（window.name）；
    window 类型 typeof
    数值 字符串 布尔值 null undefined
    Symbol object
    null定义了没有值 undefined未定义
    {}必考
    const let 比var优秀的地方 遵守块级作用域
    全局->函数局部->块级作用域
    scope 范围

    setTimeout 异步的内置函数
    for 循环 立即同步执行 
    1000（1秒）之后 i的值在var里变成了10，直接输出了i
    let 立马创建了一个块级作用域 for循环的每一次  for{块级作用域 let}
    1000（1秒）后，
