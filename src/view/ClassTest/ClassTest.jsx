import { count } from "console";
import React from "react";
class EventTest extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandler = (id, e) => {
    console.log(id, e);
  };
  render() {
    return (
      <>
        {/* 当想要传递一些自定义的元素的时候 仍然想保留着event 可以用两种方式 */}
        {/* 第一种 */}
        {/* <h1 onClick={this.clickHandler.bind(this, "id")}>test</h1> */}
        {/* 第二种 */}
        <h1 onClick={(e) => this.clickHandler("id", e)}>test</h1>
      </>
    );
  }
}
export default class ClassTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return <h3>{count}</h3>;
  }
}
