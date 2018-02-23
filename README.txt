安装部署步骤：

    1、安装nodejs -> 8.9.4
    2、安装webpack -> npm install webpack -g
    3、初始化工程 ->
        3.1  npm config set registry https://registry.npm.taobao.org  [指定淘宝镜像源]
        3.2  npm install 【安装必要依赖】
        3.3  webpack 【尝试第一次打包编译】
        3.4  启动工程 ： npm run dev
        3.5  浏览器输入 : http://localhost:8080/dist/view/index.html


1、返回协议规范：
    {
        status : 0, // 0-表示成功、10-表示登录失败、1-表示业务处理失败
        msg    : '',// 封装业务错误信息，当status为1时有内容
        data   : {
            // 具体数据封装
        }
    }


2、ajax对象请求流程：
    引用publicTools.js内的request对象
        require("util/publicTools.js");

    请求组织对象：paramData,对象参数
        {
            methodType : 请求方式，可为空，默认GET
            url        : 请求url，可为空，默认为''
            dataType   : 数据类型，可为空，默认为json
            data       : 请求数据，可为空，默认为''
            success    : function(data,msg),成功回调函数，入参为返回数据和返回的消息
            failed     : function(data,msg),业务异常回调函数，入参为返回数据与返回的错误消息
            error      : function(statusText), ajax对象请求异常回调函数，入参为错误信息
        }
