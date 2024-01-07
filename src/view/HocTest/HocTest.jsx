import { Component, createRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import hoistNonReactStatic from "hoist-non-react-statics";
import TestPortal from "./TestPortal";
function withNewComponent(OptionComponent) {
  class PropsComponent extends Component {
    render() {
      const { propsRef, ...rest } = this.props;
      return <OptionComponent ref={propsRef} {...rest}></OptionComponent>;
    }
  }
  hoistNonReactStatic(PropsComponent, OptionComponent);
  return forwardRef((props, ref) => {
    return <PropsComponent propsRef={ref} {...props}></PropsComponent>;
  });
}

class TestStaticComponent extends Component {
  static getName() {
    console.log("我是getName");
  }
  static myAge = 25;
  render() {
    return <span>我是测试static</span>;
  }
}
//通过安装 hoist-non-react-statics 插件解决高阶组件封装时静态属性丢失的问题;
const NewTestComponent = withNewComponent(TestStaticComponent);
// NewTestComponent.getName(); forwardRef包裹后 静态属性就没法用了
// console.log(NewTestComponent.myAge);
export default class HocTest extends Component {
  constructor(props) {
    super(props);
    /*  
    ref问题: 这里的ref不是传入的TestStaticComponent组件 而是PropsComponent 发生了改变
    在hoc里需要进行ref的转发
    */
    this.myRef = createRef();
    this.rootDom = document.querySelector("#root");
  }
  componentDidMount() {
    console.log(this.myRef);
  }
  render() {
    return (
      <>
        <NewTestComponent ref={this.myRef}></NewTestComponent>
        {/* 第一个参数是需要传递的dom或者组件 第二个是需要传送到的位置 */}
        {createPortal(<TestPortal></TestPortal>, this.rootDom)}
      </>
    );
  }
}
