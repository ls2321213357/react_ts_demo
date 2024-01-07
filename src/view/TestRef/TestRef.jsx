import React, { Component, createRef } from "react";
import UseRefDemo from "./UseRefDemo/UseRefDemo";
import TestHocRef from "./UseRefDemo/TestHocRef";
/* 
1.Ref允许我们访问dom节点或在render方法中创建的React元素
2.你需要在典故数据流之外强制修改子组件,被修改的子组件可能是一个
  react组件的实例,也可能是一个DOM元素 ref获取元素与document获取元素拿到的是一样的
*/
export default class TestRef extends Component {
  constructor() {
    super();
    this.testRef = createRef();
    /* 
    这里打印的时null 但是展开后有div 说明有时候打印的并不是真实的  他可能会被后续的引用改变 导致变化
    在这里实际上时拿不到ref的 在componentDidMount能拿到 因为这时候才是组件真正挂载上了
    */
    // console.log("constructor", this.testRef);
  }
  //   componentDidMount() {
  //     console.log("componentDidMount", this.testRef);
  //   }
  render() {
    return (
      <div
        style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
      >
        <UseRefDemo></UseRefDemo>
        <TestHocRef></TestHocRef>
        <div ref={this.testRef}>TestRef</div>
      </div>
    );
  }
}
