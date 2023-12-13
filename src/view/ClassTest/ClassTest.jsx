import React from "react";

import LifeCycle from "./LifeCycle.jsx";
class EventTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      door: "open",
    };
    //这里进行绑定  否则下面方法中使用的this为undefined
    this.clickEvent = this.clickEvent.bind(this);
  }
  //方式一 这种性能不好 不推荐
  clickHandler(id, e) {
    console.log(id, e);
  }
  //方式二  使用了bind
  clickEvent() {
    this.setState({
      door: "close",
    });
  }
  //方式三
  clickTrigger = () => {
    this.setState({
      door: "close",
    });
    setTimeout(() => {
      console.log(this.state.door, "door");
    }, 0);
  };
  render() {
    const { count } = this.props;
    const { door } = this.state;
    //state与props进行组件更新的区别
    /* 
    1.只要setState就会执行当前组件的render方法，其实也不准确(因为还有生命周期)
    2.props的组件,状态变化是由props的变化引起的,因为组件是有缓存的
     props不变化的话 组件就会沿用上一次的缓存结果 组件就不会进行改变
    3.在组件内可以形成闭环的，不管是动态还是静态，推荐使用state，在组件外需要经常发生变化的，推荐使用props
    
     总结:setState会引起class组件render函数的执行，render函数的执行不一定会影响无状态
          组件的更新。无状态组件只看自己的props是否发生变化
    */
    return (
      <>
        {/* 当想要传递一些自定义的元素的时候 仍然想保留着event 可以用两种方式 */}
        {/* 第一种 */}
        {/* <h1 onClick={this.clickHandler.bind(this, "id")}>test</h1> */}
        {/* 第二种 jsx可以写表达式 所以写成函数的返回值也可以  这也就是为什么写成clickHandler("id", e)
        也执行的原因 这种写法的话 就不用再去bind的方式去绑定this了，但是性能不好，每次render重新渲染的时候都会
        进行重新生成该函数

        事件列表的话可以直接去react官网去查询
        */}
        <h1 onClick={(e) => this.clickHandler("id", e)}>test</h1>
        <h2 onClick={this.clickEvent}>点我{door}</h2>
        <h3 onClick={this.clickTrigger}>click</h3>
        <span>{count}</span>
      </>
    );
  }
}
export default class ClassTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      flag: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: (this.state.count += 1),
      });
    }, 2000);
  }
  render() {
    const { count } = this.state;
    return (
      <>
        <EventTest count={count}></EventTest>
        <LifeCycle></LifeCycle>
      </>
    );
  }
}
