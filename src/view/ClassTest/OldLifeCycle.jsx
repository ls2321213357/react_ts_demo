import React from "react";
class ChildLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "我是state",
    };
  }
  //二、更新阶段  componentWillReceiveProps->shouldComponentUpdate(为true)->componentWillUpdate
  //  ->render(子)->componentDidUpdate
  //新版本废弃了
  componentWillReceiveProps() {
    console.log("将要接受参数传递阶段-componentWillReceiveProps");
  }
  //新版本废弃了
  componentWillUpdate(new_props, state) {
    //可以接受两个参数 props以及自己的state  在这里能拿到旧的props 因为还没更新
    console.log(
      "数据即将更新-componentWillUpdate",
      new_props,
      state,
      this.props,
    );
  }
  componentDidUpdate() {
    //这里的this.props话就是就是新的props了
    console.log("数据已经更新完毕-componentDidUpdate", this.props);
  }
  shouldComponentUpdate(new_props, state) {
    //可以接收参数(可选)  此时this.props还是旧的
    console.log("控制是否进行更新", new_props, state, this.props);
    /* 
    必须返回true/false  false的话就不更新了 不走componentWillUpdate和componentDidUpdate 
    进行性能优化用的比较多
    */
    return new_props.num === 1;
  }
  //render才会进行新旧props的对比 以及需要进行更新的dom  在render这一步进行对比
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
    //setState是异步的,调用的话会执行render 但是不会每次调用都去执行render
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
