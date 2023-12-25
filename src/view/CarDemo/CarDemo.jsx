import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable/ProductTable";
import { products } from "../../mock/products";
export default class CarDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products, //商品列表
      searchName: "", //搜索名
      isShowInventory: false, //是否只展示有库存的
    };
  }
  changeSearchHandler = (searchName) => {
    this.setState({
      searchName: searchName,
    });
  };
  changeIsInventoryHandler = (isShowInventory) => {
    this.setState({
      isShowInventory: isShowInventory,
    });
  };
  render() {
    const { products, searchName, isShowInventory } = this.state;
    const ProductInfo = {
      products,
      searchName,
      isShowInventory,
    };
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SearchBar
          searchName={searchName}
          isShowInventory={isShowInventory}
          changeSearchHandler={this.changeSearchHandler}
          changeIsInventoryHandler={this.changeIsInventoryHandler}
        ></SearchBar>
        <ProductTable propsInfo={ProductInfo}></ProductTable>
      </div>
    );
  }
}
