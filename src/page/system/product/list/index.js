require('./index.css');

// 引入头部和footer部分
require('_page/common/layout.css');
require('_node_modules/font-awesome/css/font-awesome.min.css');
require('_page/common/nav/index.js');
require('_page/common/footer/index.js');

// 引入工具类
var _tools       = require('_util/publicTools.js');

// 引入head部分
require('_page/common/header/index.js');

// 引入template
var productTemp  = require('./product.template');

var productList = {
    init : function () {
        this.initProductList();
    },
    bindEvent : function () {

    },
    initProductList : function () {
        // 初始化列表
        $('.page-wrap .page-list').html(productTemp);
    }
}

productList.init();