import React from "react";

class NameForm extends React.Component {
  //受控组件  如果想变成非受控的组件 就把绑定值value={null}这样写
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "",
      text: "",
      love: "",
    };
  }
  //输入的单个处理
  changeValue = (e) => {
    this.setState({
      valueInput: e.target.value,
    });
  };
  //多个输入的统一处理
  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("输入的值", this.state);
  };

  render() {
    const { valueInput, text, love } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <label>
            Name:
            <input type="text" value={valueInput} onChange={this.changeValue} />
          </label>
          <label>
            text:
            <textarea
              cols="20"
              rows="2"
              name="text"
              value={text}
              onChange={this.changeHandler}
            ></textarea>
          </label>
          <label>
            love:
            <select name="love" value={love} onChange={this.changeHandler}>
              <option value="game">游戏</option>
              <option value="eat">吃好吃的</option>
              <option value="play">出去玩</option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
      </>
    );
  }
}
export default class ManyDom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <NameForm></NameForm>
      </>
    );
  }
}
