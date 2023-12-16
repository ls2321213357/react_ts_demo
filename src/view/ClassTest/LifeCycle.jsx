import React from "react";
export default class LifeCycle extends React.Component {
  //挂载阶段 constructor->render->componentDidMount
  constructor(props) {
    super(props);
    this.state = {
      news: "新的生命周期",
      sum: 0,
      isShow: true,
    };
    console.log("constructor");
  }
  componentDidMount() {
    this.setState({
      sum: 1,
    });
    //这里拿到的都是以前的props和state
    console.log("componentDidMount", this.props, this.state);
  }
  //更新流程 shouldComponentUpdate->render->getSnapshotBeforeUpdate->componentDidUpdate
  shouldComponentUpdate(new_props, state) {
    //这里拿到的是最新的props以及state
    console.log("shouldComponentUpdate", new_props, state);
    return true;
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    /* 
    必须return一个对象 拿到的是之前的props以及state 
    执行时机在componentDidUpdate之前一点点 render之后
    */
    console.log("getSnapshotBeforeUpdate", preProps, preState);
    return {
      msg: "传递一下",
    };
  }
  componentDidUpdate(preProps, preSate, msg) {
    //前两个参数是之前的props 以及 state  第三个是 getSnapshotBeforeUpdate 传递的参数
    console.log("componentDidUpdate", preProps, preSate, msg);
  }
  componentWillUnmount() {
    console.log("组件将要被卸载");
  }
  render() {
    console.log("render");
    const { news, sum } = this.state;
    return (
      <>
        <h4>
          {news}--{sum}
        </h4>
      </>
    );
  }
}
