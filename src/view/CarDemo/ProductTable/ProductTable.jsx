import React from "react";
import ProductCategory from "./components/ProductCategory";
import ProductRow from "./components/ProductRow";
export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products, searchName, isShowInventory } = this.props.propsInfo;
    let row = [];
    const categoryTitle = [];
    products.forEach((product, index) => {
      if (isShowInventory && !product.stocked) {
        return;
      }
      if (!product.name.includes(searchName)) {
        return;
      }
      if (
        categoryTitle.length === 0 ||
        !categoryTitle.includes(product.category)
      ) {
        categoryTitle.push(product.category);
        row.push(
          <ProductCategory
            key={index}
            title={product.category}
          ></ProductCategory>,
        );
        row.push(
          <ProductRow
            key={product.name}
            price={product.price}
            stocked={product.stocked}
            productName={product.name}
          ></ProductRow>,
        );
      } else {
        row.push(
          <ProductRow
            key={product.name}
            stocked={product.stocked}
            price={product.price}
            productName={product.name}
          ></ProductRow>,
        );
      }
    });
    return (
      <>
        <table style={{ width: "200px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </>
    );
  }
}
