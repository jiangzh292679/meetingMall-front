require('./index.css');

// 引入头部和footer部分
require('_page/common/layout.css');
require('_node_modules/font-awesome/css/font-awesome.min.css');
require('_page/common/nav/index.js');
require('_page/common/footer/index.js');

// 引入辅图模板
var _subimgTem   = require('./index.template');

// 引入工具类
var _tools       = require('_util/publicTools.js');

// 引入head部分
require('_page/common/header/index.js');

// 主图
var $mainImg = $('.image-content img[name=mainImage]');
// 辅图
var $subImgs = $('#subImages');

var product_detail = {
    init : function () {
        this.bindEvent();
        this.loadParams();
    },
    bindEvent : function () {
        // 缩略图切换主图
        $("#subImages").on('mouseover','img',function () {
            var imageUrl = $(this).attr('src');
            $mainImg.attr('src',imageUrl);
        });
    },
    loadParams : function () {
        // 目前主要以假数据为主
        var mainImage = "a5ddf4e4-400f-4f66-8048-f5d2973d11a7.jpg";
        var subImages = "5eed7143-d589-4335-81ac-46cfe8182d6c.jpg,b69cfe8c-dfa9-4d37-b1ff-92261798a3f0.jpg,5eed7143-d589-4335-81ac-46cfe8182d6c.jpg,b69cfe8c-dfa9-4d37-b1ff-92261798a3f0.jpg,c1eb8ccd-a529-4ccf-b00c-c5590455482b.jpg";
        var id = "111";
        var categoryId = "111";
        var name = "111";
        var subtitle = "111";
        var price = "123";
        var stock = "111";
        var status = "1";
        var createTime = "111";
        var updateTime = "111";
        var detail = "<p><img alt=\"bg-03.jpg\" src=\"http://img.meetingmall.com/aa8e923c-e063-46f2-92bc-899ef1735ce5.jpg\" data-image-size=\"1920,879\"><br></p><p><img alt=\"register-bg-01.jpg\" src=\"http://img.meetingmall.com/3c7b5822-d846-4065-8619-9a5664f26c38.jpg\" data-image-size=\"1920,633\"><br></p><p><img alt=\"register-bg-2.jpg\" src=\"http://img.meetingmall.com/cb925081-ee55-4d51-8324-b74316ce4e48.jpg\" data-image-size=\"1920,756\"><br></p>";

        // 组织主图
        $mainImg.attr('src', _tools.getImgServerUrl(mainImage));

        // 组织辅图
        var sub_img = subImages.split(",");
        var sub_img_node = '';
        for(var i=0;i<sub_img.length;i++){
            var sub_img_param = {
                'sub_img': _tools.getImgServerUrl(sub_img[i])
            }
            sub_img_node += _tools.renderHtml(_subimgTem,sub_img_param);
        }
        $subImgs.html(sub_img_node);

        // 组织详情展示页
        var $detailContent = $('.detail-info-content');
        $detailContent.html($(detail));
    }
}



product_detail.init();