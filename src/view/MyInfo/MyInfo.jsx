import "./MyInfo.css";
import React from "react";
import ClassTest from "@/view/ClassTest/ClassTest.jsx";
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
  return (
    <>
      <div style={{ display: "flex" }}>
        {listItem}
        <ClassTest></ClassTest>
      </div>
    </>
  );
}
