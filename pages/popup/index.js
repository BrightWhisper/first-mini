//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showModal: false
  },

  onLoad: function () {

  },

  showPop(){
    this.setData({
      showModal: true
    })
  },
  blinker(){
    console.log(233);
  }
})
