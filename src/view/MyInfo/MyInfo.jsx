import "./MyInfo.css";
import React from "react";
export default function MyInfo() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  const listItem = products.map((item) => (
    <div key={item.id}>
      <input type="checkbox" defaultChecked={item.isFruit} />
      <span>{item.title}</span>
    </div>
  ));
  const clickHandler = () => {
    alert("展示信息");
  };
  return (
    <>
      <h4 onClick={clickHandler}>这是我的另一个身份信息</h4>
      {listItem}
      <EventTest></EventTest>
    </>
  );
}
