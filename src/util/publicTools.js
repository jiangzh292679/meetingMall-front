
var Hogan = require('hogan.js');
// 公共参数配置
var conf = {
    serverHost : ''
}
// 工具类封装
var _lzkjConfig = {
    /*
        author : jiangzh
        desc   : ajax通用请求封装
        param  : paramData对象，分装ajax需要的大多数内容，可自定义扩展
     */
    request : function (paramData) {
        var _this = this;
        $.ajax({
            type : paramData.methodType || 'get',
            url  : paramData.url || '',
            dataType : paramData.dataType || 'json',
            data : paramData.data || '',
            success : function (result) {
                // 自定义返回值，具体Code含义参见README
                if(0 === result.status){
                    // 回调成功处理方法
                    typeof paramData.success === 'function' && paramData.success(result.data,result.msg);
                }else if (10 === result.status()){
                    // 用户未登录，跳转登录页面
                    _this.toLogin();
                }else if(1 === result.status()){
                    // 请求正常，但是业务出现异常，返回异常数据和异常信息
                    typeof paramData.failed === 'function' && paramData.failed(result.data,result.msg);
                }
            },
            error : function (err) {
                // 分装请求级别异常的回调
                typeof paramData.error === 'function' && paramData.error(err.statusText);
            }
        })
    },
    // 获取服务器地址封装[用于动态获取开发环境地址与生产环境地质]
    getServerUrl : function (path) {
        return conf.serverHost + path;
    },
    // 获取url参数封装
    getURLParmByName : function (name) {
        var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result  = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    // 成功提示和错误提示封装
    showSuccessTip : function () {
        alert('业务处理成功');
    },
    showFailedTip : function (errMsg) {
        alert($.trim(errMsg)||'哪里出现问题了');
    },
    // 渲染html模板
    renderHtml : function(htmlTemplate, data){
        var template    = Hogan.compile(htmlTemplate);
        var result      = template.render(data);
        return result;
    },
    // 验证是否为空
    isNotEmpty : function (str) {
        var tempStr = $.trim(str);
        return !!tempStr;
    },
    // 验证是否是手机号
    isPhone   : function (phoneStr) {
        return /^1\d{10}$/.test(value);
    },
    // 验证是否是邮箱
    isEmail  : function (emailStr) {
        return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    },
    // 跳转登录页面
    toLogin : function () {
        window.location.href = "../view/login.html";
    },
    goHome : function(){
        window.location.href = './view/index.html';
    }
};

module.exports = _lzkjConfig;