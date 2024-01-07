import React, { Component } from "react";
//Portal提供了一种将子节点渲染存于父组件以外的Dom节点的优秀的方案
//适合用一些通用的弹窗或者loading效果
export default class TestPortal extends Component {
  render() {
    return <div>TestPortal</div>;
  }
}
