//
//
//
//
//ctrl.getGoods=function(){
//    serviceName.newData(2).then(
//    function(resp){
//        console.log(resp)
//        return resp
//    })
//}
//serv.newData=function(object){
//    return
//    $http.get('/getGoods').then(
//    function(resp){
//        return resp.data
//    })
//    console.log(obj)
//}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////$elements = $('.block-elem__text').find('p');
////$elements
////   .not(':first-child')
////   .addClass('visually-hidden')
////   .css('opacity', 0);
////
////setInterval(function() {
////   $elements.filter(':not(.visually-hidden)').fadeTo('slow', 0, function() {
////      $next = $(this).addClass('visually-hidden').next();
////      if ($next.length === 0) {
////         $next = $elements.first(); 
////      }
////      $next.removeClass('visually-hidden').fadeTo('slow', 1);
////   });
////}, 4000);
//
//
//
////        
////                var obj = [{"id":1,"name":"Andriy","sname":"Gulchuk","login":"Agul","pass":"1234565"},{"id":2,"name":"Svitlana","sname":"Mary","login":"Made","pass":"123565"},{"id":3,"name":"Taras","sname":"Foks","login":"TarF","pass":"123345"},{"id":4,"name":"Yriy","sname":"Kombo","login":"Bull","pass":"123465"},{"id":5,"name":"Olga","sname":"Brom","login":"Owl","pass":"12335"},{"id":6,"name":"Irina","sname":"Yep","login":"YepI","pass":"1235"},{"id":7,"name":"Admin","sname":"Admin","login":"Admin","pass":"admin"}];
////
////
////document.getElementById("demo").innerHTML = x;
////        
////
////// Сериализуем его
////var sObj = JSON.stringify(obj)
////// После этого sObj принимает строковое значение {"foo":"bar","array":[1,2,3]}
////
////// Запишем в localStorage с ключём object
////localStorage.setItem("object", sObj)
////
////// Обратимся к localStorage следующим образом
////// Хранилище вернёт нашу сериализованную строку {"foo":"bar","array":[1,2,3]}
////localStorage.object
////
////// Получим наш сериализованный объект через API
////// Одновременно преобразуем к обычному объекту JavaScript
////var retObj = JSON.parse(localStorage.getItem("object"));
////
//
//        
//        
//        
//
////app.controller('secondCtrl',['mainService','$scope',function(mainService,$scope){
////    let ctrl=this;
////    let serv=mainService;
////    $scope.person=serv.object  
////    $scope.myPict={}
////        $scope.savePict=function(){
////            console.log($scope.myPict)
////            mainService.updateImg($scope.myPict)
////        }
//
////rootScope з головноъ в меню.
////angularmodal
////localStorage
////sessionStorage