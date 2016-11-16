(function()
  {
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

    ToBuyController.$inject=['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService)
    {
      var toBuyCtrl=this;
      toBuyCtrl.items=ShoppingListCheckOffService.getBuyItems;
      toBuyCtrl.buyItem=function(itemIndex)
      {
        ShoppingListCheckOffService.buyItem(itemIndex)
      };
      toBuyCtrl.isEmpty=function()
      {
        console.log(items.count);
        if(items.count>0)
        return false;
        else {
          return true;
        }
      }
    };


    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
      var alreadyBoughtCtrl=this;
      alreadyBoughtCtrl.items=ShoppingListCheckOffService.getBoughtItems;
    }


    //Service
    function ShoppingListCheckOffService(){
      var service=this;

      var toBuy=[{name:'Cookie',quantity:10},{name:'Apple pie',quantity:10},{name:'Chocolet',quantity:20}];
      var bought=[];



      service.getBuyItems=function()
      {
        return toBuy;
      }
      service.getBoughtItems=function()
      {
        return bought;
      }
      service.buyItem=function(itemIndex)
      {
        var item=toBuy[itemIndex];
        bought.push(item);
        toBuy.splice(itemIndex,1);

      }
    };
  })();
