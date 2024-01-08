import React, { Component } from "react";

/* 
Portal提供了一种将子节点渲染存于父组件以外的Dom节点的优秀的方案
适合用一些通用的弹窗或者loading效果 而且层级比较高
一个从portal内部触发的事件会一直冒泡至包含React树的组件,即便这些元素
并不是DOM树的组件 其事件冒泡顺序还是会遵循react的组件冒泡顺序
*/
export default class TestPortal extends Component {
  alterHandler = () => {
    console.log("我是测试TestPortal");
  };
  render() {
    return <div onClick={this.alterHandler}>TestPortal</div>;
  }
}
