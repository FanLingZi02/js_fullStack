js的构造对象
class 类 js 现在也有了，
es5 没有class 关键字？ 怎么做面向对象呢？
js 是面向对象的，function是一等对象
普通函数 Player（）
new Player（）；作为类的构造函数被运行，
function Player（）{this}
this一直都在，函数里的一个常在，指针
this 指向一个Object{} this.name=name

函数运行方式的不同，里面this指向不同 
普通函数被运行时，this指针没有使命，指向全局，前端指向window，node指向global  undefined
函数作为构造函数被运行时 newPlayer（）；
this会指向 实例化的对象，构造函数需要的过程，

- 函数可以用来构造类 js 借，通过this
- this是一直存在的，指针
 函数运行方式，会导致this指向不一样
 普通函数 this=>全局window||global
 如果代码启动严格模式，undefined
- new 过程之中发生了什么
 new Player（）；将函数作为构造函数运行，
 this 指向Object{}   指向新生成的对象
 this=>{} constructor
 this.name=name
- 构造函数





