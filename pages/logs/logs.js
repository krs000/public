//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  setClick: function () {
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
