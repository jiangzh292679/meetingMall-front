require('./index.css');
require('_page/common/layout.css');
require('_page/common/footer/index.js');
require('_page/common/nav-simple/index.js');
require('_node_modules/font-awesome/css/font-awesome.min.css');
var _userService = require('_service/user-service/user-service.js');

var register = {
    init : function () {
        this.bindEvent();
    },
    bindEvent : function () {
        var _this = this;
        // 提交用户注册信息
        $('#submitBtn').click(function () {
            // 获取各节点参数
            var username = $('#username').val();
            var userPassword = $('#user-password').val();
            var userPassword2 = $('#user-password2').val();
            var userPhone = $('#user-phone').val();
            var userEmail = $('#user-email').val();
            var question = $('#question').val();
            var answer = $('#answer').val();

            var userinfo = {
                username : username,
                password : userPassword,
                password2: userPassword2,
                email    : userEmail,
                phone    : userPhone,
                question : question,
                answer   : answer
            };

            if(_this.checkUserInfo(userinfo)){
                _userService.register(userinfo,function (result) {
                    window.location.href = './login.html';
                },function (err) {
                    alert(err);
                });
            }
        });
    },
    checkUserInfo : function (userinfo) {
        // 各字段不能为空
        if(!userinfo.username){
            alert('用户名不能为空');
            return false;
        }
        if(!userinfo.password){
            alert('用户密码不能为空');
            return false;
        }
        if(!userinfo.password2){
            alert('两次密码输入不一致');
            return false;
        }
        if(!userinfo.email){
            alert('用户邮箱不能为空');
            return false;
        }
        if(!userinfo.phone){
            alert('用户手机不能为空');
            return false;
        }
        if(!userinfo.question){
            alert('提示问题不能为空');
            return false;
        }
        if(!userinfo.answer){
            alert('问题密码不能为空');
            return false;
        }
        if(!userinfo.password === userinfo.password2){
            alert('两次密码输入不一致，请重新输入');
            return false;
        }
        return true;
    }
}

register.init();