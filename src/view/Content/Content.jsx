import { useState, useEffect } from "react";
import MyInfo from "../MyInfo/MyInfo.jsx";
import NoState from "../MyInfo/noState.jsx";
import Pubsub from "../Pubsub/Pubsub.jsx";
function MyButton(props) {
  const styleInfo = {
    width: 120,
    height: 120,
    backgroundColor: "pink",
    display: "block",
  };
  //hooks让函数式组件也拥有了状态
  const [userName, setUserName] = useState("coderPerson");
  useEffect(() => {
    setUserName("ls");
  });
  return (
    <>
      <button onClick={props.clickHandler}>点击次数{props.sum}</button>
      <button onClick={() => setUserName("coderEasy")}>点击更换名字</button>
      <p style={styleInfo}>信息:{userName}</p>
    </>
  );
}
export default function Container() {
  const isShowInfo = true;
  const [sum, setSum] = useState(0);
  const [title, setTitle] = useState("学习react");
  const sumClickHandler = () => {
    setSum(sum + 1);
  };
  //useEffect 相当于ComponentDidMount、ComponentDidUpdate和ComponentDidUnmount 拥有的是共性(三合一) 而不是单独的特性
  //在这里相当于ComponentDidUpdate  学习react就是学习生命周期以及函数运行时机
  useEffect(() => {
    //初始加载默认会加载两次  开发模式并且开启严格模式下会执行两次  生产模式的话还是会恢复到一次的
    //是为了模拟立即卸载组件以及重新挂载组件  所以执行了两次  不会影响最后结果
    document.title = `点击了${sum}次`;
  });
  return (
    <>
      <h3>{title}</h3>
      <NoState></NoState>
      {isShowInfo ? (
        <MyButton clickHandler={sumClickHandler} sum={sum} />
      ) : (
        <MyInfo />
      )}
      <Pubsub id={1}></Pubsub>
    </>
  );
}
