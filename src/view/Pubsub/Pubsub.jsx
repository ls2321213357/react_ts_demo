import { useEffect, useState } from "react";

class ChatApi {
  constructor() {
    this.listener = {};
    this.statusList = {
      1: "Offline",
      2: "Offline",
      3: "Offline",
    };
  }
  //订阅
  subscribeToFriendStatus(id, callback) {
    if (!this.listener[id]) {
      this.listener[id] = [];
    }
    this.listener[id].push(callback);
  }
  //取消订阅
  unsubscribeToFriendStatus(id, callback) {
    let index = this.listener[id].indexOf(callback);
    if (index !== -1) {
      this.listener[id].splice(index, 1);
    }
  }
  //发布
  publish(status) {
    Object.values(this.listener).forEach((item) => {
      item.forEach((callback) => callback(status));
    });
  }
}

const chat = new ChatApi();
//订阅状态
setTimeout(() => {
  chat.publish("Online");
}, 1000);

export default function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  function handleStatusChange(status) {
    // console.log("数据更新");
    setIsOnline(status);
  }
  //useEffect必须是dom真实挂在到页面上或者dom更新完才执行
  //例如下方  就是先更新 然后卸载 然后执行useEffect
  useEffect(() => {
    // console.log("执行useEffect");
    chat.subscribeToFriendStatus(props.id, handleStatusChange);
    return () => {
      //   console.log("执行卸载");
      chat.unsubscribeToFriendStatus(props.id, handleStatusChange);
    };
  });
  //可以写多个useEffect  不能在判断条件以及for循环中使用这些hook
  useEffect(() => {
    // console.log("执行第二个");
  });
  if (!isOnline) {
    return "Loading......";
  }
  return isOnline;
}
