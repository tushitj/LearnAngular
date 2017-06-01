/**
 * Created by tushitjain on 5/31/17.
 */
(function () {
    var app = angular.module('store' ,[]);

    app.controller('StoreController',function(){
    this.product = gem;
    });

    var gem = {
        name: 'Dodecahedron',
        price: 29.5,
        description: "this is the item1",

    }


})();
