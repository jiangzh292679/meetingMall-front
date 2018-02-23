require('./index.css');
var _tools       = require('_util/publicTools');
var _slideStr    = require('./index.template');

var navSilde = {
    options : {
        name : '',
        navList : [
            {name : 'user-center' , desc : '个人中心' , href : 'https://www.baidu.com'},
            {name : 'my-mall' , desc : '我的商城' , href : 'https://www.baidu.com'},
            {name : 'about-jiangzh' , desc : '关于蒋征' , href : 'https://www.baidu.com'},
            {name : 'request-help' , desc : '请求帮助' , href : 'https://www.baidu.com'},
        ]
    },
    init : function (options) {
        $.extend(this.options,options);
        this.renderNavSilder();
    },
    renderNavSilder : function () {
          // 确定选中项
         for(var i=0; i< this.options.navList.length; i++){
             if(this.options.name === this.options.navList[i].name){
                this.options.navList[i].isActive = true;
             }
         }

         var result = _tools.renderHtml(_slideStr,this.options);
         $('.nav-side').html(result);
    }
};


module.exports = navSilde;