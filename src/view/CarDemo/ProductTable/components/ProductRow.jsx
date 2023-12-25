import React from "react";
export default class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { price, productName, stocked } = this.props;
    return (
      <tr style={{ color: stocked ? "black" : "red" }}>
        <td>
          <span>{productName}</span>
        </td>
        <td>
          <span>{price}</span>
        </td>
      </tr>
    );
  }
}
