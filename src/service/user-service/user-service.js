var _tools = require('_util/publicTools.js');
// 工具类封装
var _user = {
    register : function (userinfo,resolve,reject) {
        // 调用注册API
        _tools.request({
            url          : _tools.getServerUrl('/user/register.do'),
            data         : userinfo,
            methodType  : 'POST',
            success     : resolve,
            error       : reject
        });
    },
    getUserInfo : function (resolve,reject) {
        // 获取后端用户信息
        _tools.request({
            url     : _tools.getServerUrl('/user/get_user_info.do'),
            methodType  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    toLogout : function (resolve,reject) {
        // 与后端交互，进行退出操作
        _tools.request({
            url     : _tools.getServerUrl('/user/logout.do'),
            methodType  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    checkLogin : function (resolve,reject) {
        // 检查用户登录状态
        _tools.request({
            url     : _tools.getServerUrl('/user/get_information.do'),
            methodType  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    login : function (userInfo,resolve,reject) {
        var request = {
            methodType : 'post',
            url        : _tools.getServerUrl("/auth"),
            data       : userInfo,
            success    : resolve,
            failed     : reject
        };
        _tools.request(request);
    }
};

module.exports = _user;