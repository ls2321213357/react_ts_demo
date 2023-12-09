import { useEffect, useState } from "react";
export default function TestUseEffect() {
  const [sum, setSum] = useState(0);
  const [name, setName] = useState("jack");
  function changeSum() {
    setSum(sum + 1);
  }
  function changeName() {
    setName(Math.random() > 0.5 ? "LiHua" : "LiMing");
  }
  /* 
  如果只想让useEffect在类似于componentDidMounted的时候执行 就在第二个参数传递空数组
  该数组的作用是 需要被追踪的元素  当数组中的元素发生变化时 才会触发useEffect的componentDidUpdate作用
  useEffect执行的话 不能放在if以及for循环中进行使用  保证其是在函数的最顶层去运行
  想判断的话可以在其内部进行条件判断
  */
  useEffect(() => {
    console.log("执行");
  }, [name]);
  return (
    <>
      <div>{sum + "/" + name}</div>
      <button onClick={changeSum}>点击sum+1</button>
      <button onClick={changeName}>点击更换名字</button>
    </>
  );
}
