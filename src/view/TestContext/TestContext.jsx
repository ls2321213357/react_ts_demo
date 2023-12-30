import React from "react";
const ThemeColor = React.createContext(0);
const ThemeRanking = React.createContext("first");
export default class TestContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //context更新值时,使用的Object.is() 对比的是引用 如果引用对象的话 就不会发生变化 因为对象的引用值没变
  changeTheme = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    // console.log("TestContent");
    return (
      <>
        {/* 当没有Provider包裹时 就会使用默认值dark*/}
        {/* <ThemeButton></ThemeButton> */}

        {/* 这里Provider是固定写法  可以传递值value 当写了Provider进行包裹的话 必须写value才行 
        否则报错  里面可以包裹多个组件  这里的context变化 不是因为setState导致render变化的 
        是因为接收方是消费者 提供方是生产者 消费者直接消费了 从而让render执行 所以产生的变化
        */}
        <ThemeColor.Provider value={this.state.count}>
          <button
            onClick={this.changeTheme}
            style={{ width: "70px", height: "30px" }}
          >
            点击变换
          </button>
          <ThemeButton></ThemeButton>
        </ThemeColor.Provider>
      </>
    );
  }
}
/* 
1.Context提供了一个无需为每层组件手动添加props，就能在组件树之间进行数据 传递的方法  
2.Context设计目的是为了共享那些对于一个组件树而言是"全局"的数据
3.如果封装一个通用性组件的话 不推荐使用Context 直接props最灵活 嵌套很深的话推荐使用Context
4.当Provider的value值发生变化时,他内部的所有消费组件都会重新渲染。从Provider到其内部consumer组件
(包括.contextType和useContext)的传播不受制于shouldComponentUpdate函数,因此当consumer组件在其祖先
组件跳过更新的情况下也能更新。
5.Context可以无视中间组件的组织渲染 依然可以响应生产者数据的变化
*/

class ThemeButtonChildren extends React.Component {
  /* 
  1.指定contextType(固定写法) 读取当前的ThemeColor
  2.React会向上找到最近的ThemeColor.Provider,然后使用它的值
  */
  //接收的第一种写法
  // static contextType = ThemeColor;
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    // console.log("ThemeButtonChildren");
    return (
      <div>
        通过Context组件传递的
        <span style={{ color: "pink" }}>{this.context}</span>
      </div>
    );
  }
}
//接收的第二种写法
ThemeButtonChildren.contextType = ThemeColor;
class ThemeButton extends React.Component {
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    // console.log("ThemeButton");
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ThemeButtonChildren></ThemeButtonChildren>
        <ThemeConsumerTest></ThemeConsumerTest>
      </div>
    );
  }
}
/////consumer组件可以让函数式组件也订阅context 也拥有变化能力
//如果多个context的话 就必须使用consumer进行使用
function ThemeConsumerTest() {
  return (
    <ThemeColor.Consumer>
      {(color_value) => (
        <ThemeRanking.Consumer>
          {(ranking_value) => (
            <div>
              我是Consumer传递的
              <span
                style={{ color: "skyblue", fontWeight: "700" }}
              >{`第一参数${color_value}和第二参数${ranking_value}`}</span>
            </div>
          )}
        </ThemeRanking.Consumer>
      )}
    </ThemeColor.Consumer>
  );
}
