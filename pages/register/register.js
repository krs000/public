
Page({

  /**
   * 页面的初始数据
   */
  data: {

    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    username: '',
    name: '',
    colorname: "black",
    passone: '',
    passtwo: '',
    sex: ["男", "女", "公公"],
    index: 0,
    date: '1900-01-01',
    poster: '../image/al.jpg',
    name: '此时此刻',
    author: '许巍',
    src: '../image/梦中的婚礼.mp3',
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 37.838250,
      longitude: 112.564860,
      width: 50,
      height: 50,
      name: '自己的位置',
      desc: '现在的位置'

    }]
  },

  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },

  jie: function () {
    wx.showLoading({
      title: '加载中',
    }),
      wx.request({
        url: 'http://pv.sohu.com/cityjson',
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {

        }
      })
  },

  showLoading: function () {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 200)
  },
  showToast: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  showAction: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  model: function () {

    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  switch: function (e) {
    this.setData({
      kai: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindSexChange: function (e) {

    console.log()
    this.setData({
      index: e.detail.value
    })

  },


  loader: function (e) {

    username: e.detail.value
  },
  checkboxChange: function (e) {
    console.log('值为：', e.detail.value)
  },
  formSubmit: function (e) {
    console.log('数据为：', e.detail.value)
  },
  formReset: function (e) {
    console.log('点击重置')
  },
  password: function (e) {
    console.log(e.detail.value)
  },
  passwords: function (e) {
    console.log(e.detail.value)
  },
  click: function (e) {
    this.setData({
      username: '',
      name: ''
    })
  },


  bindBlur: function (e) {

    this.setData({

      username: e.detail.value

    })



    if (this.data.username.length < 3 || this.data.username.length > 7) {

      this.setData({
        colorname: "red"

      });


      wx.showToast({ title: '输入有误', mask: true })

    } else {


      this.setData({


        colorname: "blue"




      })
    }
  },

  submitqq: function (e) {
    console.log(e.detail.value)
    this.setData({
      passone: e.detail.value.passwor,
      passtwo: e.detail.value.passs

    })
    if (this.data.passone == this.data.passtwo) {
      console.log(e.detail.value)
    } else {
      wx.showToast({ title: '密码不一致', mask: true })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res.latitude)
        that.setData({

          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
var rectX=0 ;
    this.audioCtx = wx.createAudioContext('myAudio')
    var context = wx.createCanvasContext('firstCanvas')
    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    // context.rect(0, 0, 200, 200)
    // context.stroke()
    context.setStrokeStyle("#ff0000")
    // context.setLineWidth(2)
    // context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    // context.arc(100, 100, 40, 0, Math.PI, false)
    // context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    // context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()

    
    function draw() {
      var context = wx.createCanvasContext('firstCanvas')
      context.setStrokeStyle("#00ff00")
      context.setLineWidth(20)
      context.rect(rectX, 60, 100, 100)
      context.stroke()
      context.draw()


    }


    function animation() {

      rectX++;


      if (rectX > 200) {
        return;
      }
      draw();




      requestAnimationFrame(animation)



    }
    animation();
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})