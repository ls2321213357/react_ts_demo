import { useState } from "react";
import MyInfo from "../MyInfo/MyInfo.jsx";
import NoState from "../MyInfo/noState.jsx";
function MyButton(props) {
  const user = {
    name: "coderPerson",
    age: 24,
  };
  const styleInfo = {
    width: 150,
    height: 150,
    backgroundColor: "pink",
    display: "block",
  };
  return (
    <>
      <button onClick={props.clickHandler}>点击次数{props.sum}</button>
      <span className="content">我给span上颜色</span>
      <p style={styleInfo}>
        信息:{user.name}--{user.age}
      </p>
    </>
  );
}
export default function Container() {
  const isShowInfo = true;
  const [sum, setSum] = useState(0);
  const sumClickHandler = () => {
    setSum(sum + 1);
  };
  return (
    <>
      <h1>欢迎学习react</h1>
      <NoState></NoState>
      {isShowInfo ? (
        <MyButton clickHandler={sumClickHandler} sum={sum} />
      ) : (
        <MyInfo />
      )}
      <MyButton clickHandler={sumClickHandler} sum={sum}></MyButton>; No
    </>
  );
}
