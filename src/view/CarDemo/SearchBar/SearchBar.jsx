import React from "react";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  changeSearchName = (e) => {
    this.props.changeSearchHandler(e.target.value.trim());
  };
  changeIsShowInventory = (e) => {
    this.props.changeIsInventoryHandler(e.target.checked);
  };
  render() {
    const { searchName, isShowInventory } = this.props;
    return (
      <div>
        <input
          type="text"
          value={searchName}
          onChange={this.changeSearchName}
          placeholder="搜索"
        />
        <div style={{ display: "flex" }}>
          <input
            type="checkbox"
            checked={isShowInventory}
            onChange={this.changeIsShowInventory}
          ></input>
          <span>是否只展示有库存的</span>
        </div>
      </div>
    );
  }
}
