//index.js
//获取应用实例
var common = require('../common/aaa.js')
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    add: null,
    id: 1,
    bool:false,
    arr:[1,2,3,4]
    
  },
  onclick: function () {
    var id = this.data.id;
    this.setData({

      // id: id+1
      
      bool:!this.data.bool

    })
  },
  //事件处理函数
  bindViewTap: function () {

    common.first(this.data.motto)

  },
  onLoad: function () {
    if (this.data.add == null) {


      this.setData({ add: app.globalData.add })
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
