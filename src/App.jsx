import Container from "./view/Content/Content.jsx";
import OldLifeCycle from "./view/ClassTest/OldLifeCycle.jsx";
import LifeCycle from "./view/ClassTest/LifeCycle.jsx";
import { useState } from "react";
function IsShowLifeCycle(props) {
  if (props.isShow) {
    return <LifeCycle></LifeCycle>;
  } else {
    return <h4>隐藏了</h4>;
  }
}

function App() {
  const [isShow, useIsShow] = useState(true);
  return (
    <>
      <Container></Container>
      {/* <OldLifeCycle></OldLifeCycle> */}
      {/* <button onClick={() => useIsShow(false)}>干掉你</button> */}
      {/* <IsShowLifeCycle isShow={isShow}></IsShowLifeCycle> */}
    </>
  );
}

export default App;
