import { Component, createRef, forwardRef } from "react";
//类式组件使用ref
class TestClassComponent extends Component {
  constructor() {
    super();
  }
  clickHandler = () => {
    console.log("click TestClassComponent");
  };
  render() {
    return <div onClick={this.clickHandler}>我是TestClassComponent</div>;
  }
}
//ref回调函数的写法
class TestRefHandler extends Component {
  render() {
    return <span ref={this.props.refHandler}>我是回调形式的ref</span>;
  }
}
/* 
1.函数式组件默认不能使用ref 因为没有实例 不过可以使用forwardRef进行访问 
2.forwardRef能够让其他组件更方便的拿到当前组件的ref
3.forwardRef返回一个组件 
4.ref转发式一项将ref自动的通过组件传递到某一子组件的技巧
*/
const FancyButton = forwardRef((props, ref) => {
  return <div ref={ref}>forwardRef定义的{props.children}</div>;
});

export default class UseRefDemo extends Component {
  constructor() {
    super();
    this.textInput = createRef();
    this.classComponent = createRef();
    this.fancyButton = createRef();
  }
  componentDidMount() {
    //直接打印的话会变成个tag标签 这样变成对象的属性的话 结构就和createRef获取的一样了
    // let nowTest = this.testRefHandler;
    // console.log("TestRefHandler", { nowTest });
    // console.log("fancyButton", this.fancyButton);
  }
  focusHandler = () => {
    this.textInput.current.focus();
    this.classComponent.current.clickHandler();
  };
  render() {
    return (
      <div style={{ width: "200px" }}>
        <input type="text" ref={this.textInput} />
        <input type="button" value="点击获取焦点" onClick={this.focusHandler} />
        <TestClassComponent ref={this.classComponent} />
        <TestRefHandler refHandler={(el) => (this.testRefHandler = el)} />
        <FancyButton ref={this.fancyButton}>
          <em style={{ color: "green" }}>类似插槽</em>
        </FancyButton>
      </div>
    );
  }
}
