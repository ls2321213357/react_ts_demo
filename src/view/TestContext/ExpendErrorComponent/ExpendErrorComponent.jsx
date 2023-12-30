import React from "react";
class ErrorBoundaries extends React.Component {
  /* 
    1.错误边界组件 这种组件可以捕获并打印发生在其子组件树任务位置的javaScript
    错误，并且他会渲染出备用UI，而不是渲染那些崩溃的子组件树,错误边界在渲染期间、
    生命周期方法和整个组件树构造函数中捕获错误。(通用组件)
    错误边界无法捕捉一下场景的错误:
      1.不能捕获自身发生的错误 只能捕获子阶段发生的错误  
      2.事件处理  3. 异步代码(例如setTimeout或requestAnimationFrame回调函数)
      以上使用try catch进行错误捕获
      4.服务端渲染 
      
    */
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  //发生错误的时候触发
  static getDerivedStateFromError(error) {
    //更新state让下一次渲染能够显示降级后的UI
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    //在这里可以选择把错误上报 给后端发请求
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h3>Warning!! Component Error</h3>;
    }
    return this.props.children;
  }
}
class ShowErrorChild extends React.Component {
  render() {
    throw "ShowErrorChild错误";
    return (
      <>
        <span>12345</span>
      </>
    );
  }
}
class ShowErrorHandler extends React.Component {
  // errorHandler = () => {
  //   throw "点击产生的错误";
  // };
  render() {
    // throw "组件发生了错误"; 事件的话无法被捕捉 点击了没有捕捉到
    // return <span onClick={this.errorHandler}>111</span>;
    // 当前组件没错误 其内部深层组件报错时 仍然可以捕捉的到 能捕捉到所有子组件
    // return (
    //   <>
    //     <ShowErrorChild></ShowErrorChild>
    //   </>
    // );
  }
}
export default class ExpendErrorComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ErrorBoundaries>
          <ShowErrorHandler />
        </ErrorBoundaries>
      </>
    );
  }
}
