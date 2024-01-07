export default class EasyPubsub {
  constructor() {
    this.listenerList = [];
    this.dataInfo = "我是晚报";
  }
  //订阅信息
  addSourceListenHandler(callback) {
    this.listenerList.push(callback);
  }
  //发布信息
  publishSourceHandler(info) {
    this.listenerList.forEach((cb) => cb(info));
  }
  //取消订阅
  cancelPubsubSource(callback) {
    this.listenerList = this.listenerList.filter((item) => item !== callback);
    console.log(this.listenerList);
  }
  //获取最新订阅消息内容
  getComment() {
    return this.dataInfo;
  }
}
// const easySource = new EasyPubsub();
// easySource.addSourceListenHandler((info) => {
//   console.log(`我是一号,我订阅的是${info}`);
// });
// function addMessage(info) {
//   console.log(`我是二号,我订阅的是${info}`);
// }
// easySource.addSourceListenHandler(addMessage);
// easySource.publishSourceHandler("front晚报");
// easySource.cancelPubsubSource(addMessage);
// easySource.publishSourceHandler("发个早报");
