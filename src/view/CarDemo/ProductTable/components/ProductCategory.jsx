import React from "react";
export default class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <th colSpan={2}>{this.props.title}</th>
      </tr>
    );
  }
}
