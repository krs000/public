var startX=0;
var startY=0;
var moveY = 0;
var moveX=0;
var X = 0;
var Y = 0;
var snakeHead = {
  x: 0,
  y: 0,
  color: "#ff0000",
  w: 20,
  h: 20,




};
var direction = null; 
var snakeDirection = "right"
Page({


  /**
   * 页面的初始数据 
   */
  data: {


  },
  kaishi: function (e) {


    startX = e.touches[0].x
    startY = e.touches[0].y




  },
  yidong: function (e) {


    moveX = e.touches[0].x
    moveY = e.touches[0].y


    X = moveX - startX;
    Y = moveY - startY;


    if (Math.abs(X) > Math.abs(Y) && X > 0) {


      console.log("right");
      direction = "right"


    } else if (Math.abs(X) > Math.abs(Y) && X < 0) {


      console.log("left");
      direction = "left"


    } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {


      console.log("buttom");
      direction = "buttom"
    } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {


      console.log("top");
      direction = "top"
    }






  },
  jieshu: function () {
    snakeDirection = direction
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var fireNume = 0;
    var context = wx.createCanvasContext('tanchishe')
    function animate() {
      fireNume++
      if (fireNume % 20 == 0) {
        switch (snakeDirection) {


          case "left":
            snakeHead.x -= snakeHead.w
            break;
          case "right":
            snakeHead.x += snakeHead.w
            break;
          case "buttom":
            snakeHead.y += snakeHead.h
            break;
          case "top":
            snakeHead.y -= snakeHead.h
            break;


        }
      }






      context.rect(snakeHead.x, snakeHead.y, snakeHead.w, snakeHead.h)
      context.setFillStyle(snakeHead.color)
      context.fill()


      requestAnimationFrame(animate)


      context.draw()
    }
    animate();
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