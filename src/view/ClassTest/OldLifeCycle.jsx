import React from "react";
class ChildLifeCycle extends React.Component {
  constructor(props) {
    super(props);
  }
  //二、更新阶段  componentWillReceiveProps->shouldComponentUpdate(为true)->componentWillUpdate
  //  ->render(子)->componentDidUpdate
  componentWillReceiveProps() {
    console.log("将要接受参数传递阶段-componentWillReceiveProps");
  }
  componentWillUpdate() {
    console.log("数据即将更新-componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("数据已经更新完毕-componentDidUpdate");
  }
  shouldComponentUpdate() {
    console.log("控制是否进行更新");
    //必须返回true/false  false的话就不更新了 不走componentWillUpdate和componentDidUpdate
    return true;
  }
  render() {
    const { num } = this.props;
    console.log("子render执行");
    return (
      <>
        <span>{num}</span>
      </>
    );
  }
}
export default class OldLifeCycle extends React.Component {
  //一、挂载阶段  constructor->componentWillMount->render->componentDidMount
  constructor(props) {
    super(props);
    console.log("constructor执行");
    this.state = {
      count: 0,
    };
  }
  //用的很少 新版本废弃了
  componentWillMount() {
    console.log("componentWillMount执行");
  }
  componentDidMount() {
    console.log("componentDidMount执行");
    this.setState({
      count: 1,
    });
  }
  render() {
    const { count } = this.state;
    console.log("父render执行");
    return (
      <>
        <h2>
          老的生命周期--
          <ChildLifeCycle num={count}></ChildLifeCycle>
        </h2>
      </>
    );
  }
}
