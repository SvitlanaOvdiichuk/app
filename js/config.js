app.config(function($routeProvider){
    
    
    $routeProvider
        .when('/',{
        templateUrl:'templates/views/main.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
        .when('/man',{
        templateUrl:'templates/views/man.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
        .when('/woman',{
        templateUrl:'templates/views/woman.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
        .when('/kids',{
        templateUrl:'templates/views/kids.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
             .when('/produkt',{
        templateUrl:'templates/views/produkt.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
        
        .when('/admin',{
        templateUrl:'templates/views/admin.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
  
          .when('/adminOrders',{
        templateUrl:'templates/views/adminOrders.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
          .when('/adminUsers',{
        templateUrl:'templates/views/adminUsers.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
    
            .when('/contakt',{
        templateUrl:'templates/views/contakt.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
    
            .when('/blog',{
        templateUrl:'templates/views/blog.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
           .when('/enter',{
        templateUrl:'templates/views/enter.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
      .when('/shoppingCart',{
        templateUrl:'templates/views/shoppingCart.html',
        controller:'mainCtrl',
        controllerAs:'my'
    })
    
            
    
        .otherwise({
        redirectTo: '/'
    })

})