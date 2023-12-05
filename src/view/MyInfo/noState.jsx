export default function NoState() {
  let sum = 0;
  setTimeout(() => {
    //不会引起dom的变化  只会在这里变化
    sum += 1;
  }, 1000);
  const getName = () => {
    return "获取名字";
  };
  return (
    <>
      <h2 style={{ color: "red" }}>
        我是无状态组件{sum}
        {getName()}
      </h2>
    </>
  );
}
