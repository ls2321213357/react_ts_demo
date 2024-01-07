import React, { Component, createRef, forwardRef } from "react";
//高阶组件简称Hoc
/* 
1.不要在hoc中修改组件的原型
2.不要再render中使用hoc 不仅性能有问题 而且重新挂载组件会导致该组件以及其子组件的状态全部丢失 
*/
function logProps(OptionComponent) {
  class LogPropsInterior extends Component {
    componentDidUpdate(prevProps) {
      console.log("old props", prevProps);
      console.log("new props", this.props);
    }
    render() {
      const { forwardRef, ...rest } = this.props;
      return <OptionComponent ref={forwardRef} {...rest}></OptionComponent>;
    }
  }
  /* 
  注意 forwardRef回调的第二个参数 ‘ref’
  我们可以将其作为常规的prop属性传递给LogPropsInterior
  然后他就可以被挂载到LogPropsInterior子组件上
  */
  return forwardRef((props, ref) => {
    return <LogPropsInterior forwardRef={ref} {...props} />;
  });
}
class TextComponent extends Component {
  render() {
    return <p>我是通过高阶组件创建出来的</p>;
  }
}
const TestHocComponent = logProps(TextComponent);
export default class TestHocRef extends Component {
  constructor() {
    super();
    this.testHocComponentRef = createRef();
  }
  componentDidMount() {
    console.log("TestHocComponent", this.testHocComponentRef);
  }
  render() {
    return (
      <>
        <TestHocComponent ref={this.testHocComponentRef}></TestHocComponent>
      </>
    );
  }
}
