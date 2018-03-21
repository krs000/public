var progressNum=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'

    ],
    inter: 2000,
    backgroundColor:"red",
    activeColor:"blue",
    autoplay:true,
    icon:[
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    progress:0,
    bools:true
  },

  /**
   * 生命周期函数--监听页面加载
   */

  swiper: function (e) {
    console.log(e)
  },
  

  sliderChange: function (e) {
    console.log(e)

    this.setData({
      inter: e.detail.value,
      backgroundColor:"black",
      activeColor:"black"

    })

  },
  buttom:function(e){
this.setData({
  autoplay:!this.data.autoplay
})
  },
  onLoad:function(){

//     action:function(){
//     var  progress=this.data.progress
//     this.setData({
//      bools:!this.data.bools
// })
// }   
    var that=this;
  var time= setInterval(function(){
      progressNum++;
        if (progressNum>=100){
          clearInterval(time);
    }else{
    that.setData({
      progress: progressNum
    })
    }
  },30)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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