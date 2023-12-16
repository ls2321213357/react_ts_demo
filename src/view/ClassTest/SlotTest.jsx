import React from "react";
export default class SlotTest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //函数式组件都可以这样写 都是通过props来接收
    const { children, propChild } = this.props;
    return (
      <>
        <div>parent--{children}</div>
        {propChild}
      </>
    );
  }
}
