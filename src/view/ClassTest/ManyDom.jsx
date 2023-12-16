import React from "react";
export default class ManyDom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [1, 2, 3, 4],
    };
  }
  render() {
    const { productList } = this.state;
    return (
      <>
        <ul style={{ listStyle: "none" }}>
          {productList.map((item) => {
            return <li key={item.toString()}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}
