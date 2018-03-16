require('./index.css');
require('_page/common/layout.css');
require('_page/common/footer/index.js');
require('_page/common/nav-simple/index.js');
require('_node_modules/font-awesome/css/font-awesome.min.css');

var _tools = require('_util/publicTools.js');
var _userService = require('_service/user-service/user-service.js');

var login = {
    init : function () {
        this.bindEvent();
    },
    bindEvent : function () {
        var _this = this;
        // 如果按下回车，也进行提交
        $('.user-content').keyup(function(e){
            // keyCode == 13 表示回车键
            if(e.keyCode === 13){
                _this.submit();
            }
        });
        // 扫码登陆，现阶段未支持
        $('.link.QRCode').click(function () {
            alert('此功能本期未开放');
        });
        $('#loginSubmit').click(function () {
            _this.submit();
        });
    },
    submit : function () {
        // 获取用户名称
        var username = $('#loginName').val();
        // 获取用户填写密码
        var userPwd = $('#loginPwd').val();

        var userinfo = {
            username : username,
            password : userPwd
        };
        _userService.login(userinfo,
            function (result) {
                // 判断业务是否成功
                if(result.code===400){
                    //表示未成功，提示错误信息
                    alert(result.message);
                }else {
                    // 存储randomKey和token
                    _tools.setRandomKey(result.randomKey);
                    _tools.setToken(result.token);

                    window.location.href = './index.html';
                }
            },
            function (errData,errMsg) {
                alert(errMsg);
            }
        );
    }
}

login.init();