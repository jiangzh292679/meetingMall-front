require('./index.css');
require('_page/common/layout.css');
require('_page/common/footer/index.js');
require('_page/common/nav-simple/index.js');
require('_node_modules/font-awesome/css/font-awesome.min.css');


var login = {
    init : function () {
        this.bindEvent();
    },
    bindEvent : function () {
        // 扫码登陆，现阶段未支持
        $('.link.QRCode').click(function () {
            alert('此功能本期未开放');
        })
    }
}

login.init();