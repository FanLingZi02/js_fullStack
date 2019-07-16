import React, { Component } from 'react';
// react里面 类的继承方式
class Demo1 extends Component {
  render() {
    console.log(this.props);
    // return 里面是 jsx 用()包起来 让用户看到
    return (
      <div style={{ backgroundColor: 'red'}}
      onClick={() => {
        const { onClick } = this.props;
        onClick('内容来自子组件');
      }}
      >
        Demo1
      </div>
    ) 
  }
}
 export default Demo1;