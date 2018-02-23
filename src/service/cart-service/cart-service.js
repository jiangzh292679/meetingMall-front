
var _tools = require('_util/publicTools');

var _cart = {
    getCartCounts : function (resolve,reject) {
        _tools.request({
            url     : _tools.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error   : reject
        });
    }
};


module.exports = _cart;