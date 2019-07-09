//index.js
//获取应用实例
const app = getApp()
var Config = require('../../config.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      wx.showModal({
        title: '未登陆小程序',
        content: '点击确定授权登陆',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.login({
              success: res => {
                console.log(res.code)
                wx.request({
                  url: Config.remote.login,
                  data:{code:res.code},
                  method:'GET',

                })
              }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
