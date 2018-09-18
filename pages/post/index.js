//index.js
//获取应用实例
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
var Config = require('../../config.js')
Page({
    data: {
        id:'',
        post:{}
    },
    onLoad: function (option) {
        var that = this;
        var id = option.id;
        that.setData({
            id:id
        })

        wx.request({
            url: Config.remote.posts + "/" + id,
            method: "GET",
            success: function (res) {
                that.setData({
                    post: res.data
                });
                var article = res.data.content.rendered;
                WxParse.wxParse('article', 'html', article, that,5);
            }
        })
    },
})
