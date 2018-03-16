require('./index.css');
var _tools = require('_util/publicTools.js');
var _user = require('_service/user-service/user-service.js');
var _cart = require('_service/cart-service/cart-service.js');

var nav = {
    // 业务初始化
    init : function () {
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCounts();
        return this;
    },
    // 绑定常见业务事件
    bindEvent : function () {
        // 退出事件
        $('#userLogout').click(function () {
            _user.toLogout(function (res) {
                window.location.reload();
            },function (errMsg) {
                _tools.showFailedTip(errMsg);
            })
        })
    },
    // 首页加载用户信息
    loadUserInfo : function () {
        _user.getUserInfo(
            function (res) {
                $('.user-info .user-nologin').hide()
                    .siblings('.user-info .user-login').show()
                    .find('.username').text(res.username);
            },
            function (errMsg) {
                // 继续保持未登录状态
            })
    },
    // 首页加载购物车数量
    loadCartCounts : function () {
        _cart.getCartCounts(
            function (res) {
                $('.nav .cart-counts').text(res.counts||0);
            },
            function (errMsg) {
                $('.nav .cart-counts').text(0);
            }
        )
    }
};

module.exports = nav.init();