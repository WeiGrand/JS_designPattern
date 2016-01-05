var productFactory = (function () {
    var productFactories = {
        "flight": function () {
            return new Flight();
        },
        "hotel": function () {
            return new Hotel();
        }
    };

    return {
        createProduct: function (productType) {
            return productFactories[productType]();
        }
    }
})();
User.prototype = {
    constructor: User,
    order: function (productType) {
        this.shopCart.push(productFactory.createProduct(productType));
    }
}
