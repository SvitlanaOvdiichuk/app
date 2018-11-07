app.service('mainService', ['$http',function ($http) {
    let serv = this;
   serv.user = {};

    
//    serv.getManGoods = function(x){
//        return $http.get('127.0.0.1:51255/getManGoods',x).then(
//            function (response) {
//                return response.data
//            })
//    }
//    
//        serv.getManGoods = function(x){
//        return $http.get('127.0.0.1:51255/getManGoods',x).then(
//            function (response) {
//                return response.data
//            })
//    }
    
    var config = {
headers: {
'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
}
 }
  

    
        serv.getManGoods = function(){
        return $http.get('http://localhost:51255/getManGoods').then(
            function (response) {
                return response.data
            })
    

    }
    serv.getGoods = function(){
        return $http.get('http://localhost:51255/getGoods').then(response=>{
            return response.data
        })
    }
    
    
     serv.getWomanGoods = function(){
        return $http.get('http://localhost:51255/getWomanGoods').then(response=>{
            return response.data
        })
    }
 
        
       serv.getKidsGoods = function(){
        return $http.get('http://localhost:51255/getKidsGoods').then(response=>{
            return response.data
        })
    }
   
       
    
 serv.getUsers = function(){
        return $http.get('http://localhost:51255/getUsers').then(response=>{
            return response.data
        })
    }
 
 
 
 serv.addUser = function (data) {
        // console.log('service',data)
       return $http.post('http://localhost:51255/postUser', data, config)
   }
 
//     addUser: (data) => {
//      return $http.post(`http://localhost:51255/postUser`, data, config)
//    }
//          

 
//    addUser: (data) => {
//      return $http.post(`${apiUrl}/users`, data, config)
//    }
//                  
   serv.getOrders = function(){
        return $http.get('http://localhost:51255/getOrders').then(response=>{
            return response.data
        })
    }


}]);




//app.service('mainService', [function () {
//    let serv = this;
//    serv.object = [{
//            name: 'Apple iPhone',
//            display: 4.7,
//            displaySize: '1334x750',
//            camera: 12,
//            core: 6,
//            protection: 'IP67',
//            memory: 2,
//            price: 300,
//            img: '/app/img/1.png'
//                   },
//        {
//
//            name: 'Samsung Galaxy',
//            display: 5.8,
//            displaySize: '2560х1440',
//            camera: 12,
//            core: 8,
//            protection: 'IP68',
//            memory: 4,
//            price: 200,
//            img: '1.png'
//    }, {
//            name: 'Xiaomi Redmi Note',
//            display: 7.7,
//            displaySize: '1334x750',
//            camera: 13,
//            core: 6,
//            protection: 'IP67',
//            memory: 2,
//            price: 250,
//            img: '1.png'
//    }, {
//            name: 'Huawei',
//            display: 5.7,
//            displaySize: '1334x750',
//            camera: 12,
//            core: 6,
//            protection: 'IP67',
//            memory: 2,
//            price: 150,
//            img: '1.png'
//    }, {
//            name: 'Meizu',
//            display: 5.7,
//            displaySize: '1334x750',
//            camera: 12,
//            core: 6,
//            protection: 'IP67',
//            memory: 2,
//            price: 130,
//            img: '1.png'
//    }, {
//            name: 'Xiaomi Mi',
//            display: 4.7,
//            displaySize: '1334x750',
//            camera: 8,
//            core: 6,
//            protection: 'IP67',
//            memory: 4,
//            price: 150,
//            img: '1.png'
//    }, {
//            name: 'Meizu',
//            display: 6.0,
//            displaySize: '1334x750',
//            camera: 12,
//            core: 6,
//            protection: 'IP67',
//            memory: 6,
//            price: 200,
//            img: '1.png'
//    }, {
//            name: 'Samsung Galaxy',
//            display: 5.5,
//            displaySize: '1334x750',
//            camera: 12,
//            core: 6,
//            protection: 'IP67',
//            memory: 4,
//            price: 300,
//            img: '1.png'
//    }, {
//            name: 'Xiaomi Mi',
//            display: 5.7,
//            displaySize: '1280x720',
//            camera: 12,
//            core: 6,
//            protection: 'IP67',
//            memory: 6,
//            price: 250,
//            img: '1.png'
//    }
//
//
//
//
//    ];
//
//}])

//$scope.newproduct = {
//    name: '',
//    display: '',
//    displaySize: '',
//    camera: '',
//    core: '',
//    protection: '',
//    memory: '',
//    price: ''
//
//}
//
//
//$scope.addNewProduct = function () {
//
//    $scope.object.push($scope.newproduct)
//    $scope.newperson = {
//        name: '',
//        display: '',
//        displaySize: '',
//        camera: '',
//        core: '',
//        protection: '',
//        memory: '',
//        price: ''
//
//    }
//}


//let model = 'hello world';
//        let routeApp = angular.module('routeApp', ['ngRoute'])
//        routeApp.controller('HelloWorldCtrl', function($scope) {
//            let ctrl = this;
//            $scope.people = [{
//                    name: 'Petro',
//                    sname: 'Petriv',
//                    age: 18
//                },
//                {
//                    name: 'Valera',
//                    sname: 'Valeryv',
//                    age: 28
//                },s
//                {
//                    name: 'Mykola',
//                    sname: 'Mykolych',
//                    age: 38
//                },
//            ];

//            $scope.newperson = {
//                name: '',
//                sname: '',
//                age: ''
//
//            }
//            $scope.addNewUser = function() {
//
//                $scope.people.push($scope.newperson)
//                $scope.newperson = {
//                    name: '',
//                    sname: '',
//                    age: ''
//                }
//            }
//            $scope.deleteUser = function(id) {
//                $scope.people.splice(id, 1)
//                //                delete $scope.people[id]
//            }
//            $scope.id = ''
//            $scope.updateUser = function(id) {
//                $scope.id = id
//                $scope.buttonShow = true
//
//                $scope.newperson = $scope.people[id]
//            }
//            $scope.saveUser = function() {
//                $scope.people[$scope.id] = $scope.newperson
//                $scope.newperson = {
//                    name: '',
//                    sname: '',
//                    age: ''
//
//
//                }
//                $scope.buttonShow = !$scope.buttonShow
//
//            }
//            $scope.Clear = function() {
//                $scope.people.splice(0);
//                
//            }
//
//
//            $scope.showMe = false;
//            $scope.myFunc = function() {
//                $scope.showMe = !$scope.showMe;
//            }
//
//
//