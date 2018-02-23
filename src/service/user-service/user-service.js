var _tools = require('_util/publicTools.js');
// 工具类封装
var _user = {
    getUserInfo : function (resolve,reject) {
        // 获取后端用户信息
        _tools.request({
            url     : _tools.getServerUrl('/user/get_information.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    toLogout : function (resolve,reject) {
        // 与后端交互，进行退出操作
        _tools.request({
            url     : _tools.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    checkLogin : function (resolve,reject) {
        // 检查用户登录状态
        _tools.request({
            url     : _tools.getServerUrl('/user/get_information.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    login : function (userInfo,resolve,reject) {
        // 退出状态
        _user.toLogout(
            function(res){
                window.location.reload();
            },
            function (errMsg) {
                // 退出失败，就失败呗
            }
        )
    }
};

module.exports = _user;