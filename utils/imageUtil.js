var Parser = require("../wxParse/wxParse.js");
var imageUtil = {
    getFirstImage:function (source) {
        var regex = /<img\b.*?(?:\>|\/>)/gi;
        var matched = regex.exec(source);
        if(matched) {
            var reg = /\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/i;
            var src = reg.exec(matched);
            return src[1];
        } else {
            return "../../images/default.jpg";
        }
    }
}

module.exports = {
    image:imageUtil
}