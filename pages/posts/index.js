//index.js
//获取应用实例
const app = getApp()
var Config = require('../../config.js')
var ImageUtil = require('../../utils/imageUtil')

Page({
    data: {
        list:[],
        page:1,
        per_page:5,
        search:"",
        url:Config.remote.posts
    },
    onLoad: function () {
        var that = this;
        var page = that.data.page;
        var per_page = that.data.per_page;
        var search = that.data.search;
        var param = {page:page,per_page:per_page,search:search};
        wx.request({
            url:Config.remote.posts,
            method:"GET",
            data:param,
            success:function (res) {
                var html = res.data[0].content.rendered;
                ImageUtil.image.getFirstImage(html);
                that.setData({
                    list:res.data,
                    page:page+1
                });
            }
        })
    }
})
