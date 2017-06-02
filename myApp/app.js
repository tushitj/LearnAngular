/**
 * Created by tushitjain on 5/31/17.
 */
(function () {
    var app = angular.module('store' ,[]);

    app.controller('StoreController',function(){
    this.product = gems;
    });

    var gems = [
        {
            name: 'Product1',
            price: 100,
            description: "This is product 1 and is not available to add to cart is not soldOut",
            canPurchase: false,
            soldOut: false,
        },
        {
            name: 'Product2',
            price: 200,
            description: "This is product 2 and is available to add to cart and is not sold out",
            canPurchase: true,
            soldOut: false,
        },
        {
            name: 'Product3',
            price: 300,
            description: "This is product 3 and is not available to add to cart and is sold out",
            canPurchase: true,
            soldOut: true,

        },
    ];


})();
