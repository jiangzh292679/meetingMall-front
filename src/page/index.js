require('./common/layout.css');
require('_node_modules/font-awesome/css/font-awesome.min.css');
require('_page/common/nav/index.js');
require('_page/common/footer/index.js');
require('./common/header/index.js');

var _navSlide = require('./common/nav-slide/index.js');

options = {
    name : 'my-mall'
}

_navSlide.init(options);



