require('./index.css');
require('_util/slider/index.js');
var _tools = require('_util/publicTools.js');

var bannerTemplate = require('./banner.template');

$(function () {
    // 渲染banner图
    var bannerHTML = _tools.renderHtml(bannerTemplate);
    var $bannerImage = $(bannerHTML);
    var $banner = $('#banner').append($bannerImage);
    var unslider04 = $('#b04').unslider({
            dots: true
        });

});