app.controller('mainCtrl', ['mainService', '$scope', '$location', function (mainService, $scope, $location) {
  let ctrl = this;
  let serv = mainService;


  let CurrectUser = {};
  $scope.LoginStatus = false;
  $scope.myGoods = {}

  
    
  ctrl.getWomanGoods = function () {
    serv.getWomanGoods().then(

      function (resp) {
        console.log(resp)
        $scope.womanGoods = resp
        return resp
      }
    )

  }
  ctrl.getWomanGoods();
  
    ctrl.getManGoods = function () {
    serv.getManGoods().then(

      function (resp) {
        console.log(resp)
        $scope.manGoods = resp
        return resp
      }
    )

  }
  ctrl.getManGoods();
  
  
  
      ctrl.getKidsGoods = function () {
    serv.getKidsGoods().then(

      function (resp) {
        console.log(resp)
        $scope.kidsGoods = resp
        return resp
      }
    )

  }
  ctrl.getKidsGoods();
  
  
  
  ctrl.getGoods = function () {
    serv.getGoods().then(

      function (resp) {
        console.log(resp)
        $scope.myGoods = resp
        return resp
      }
    )

  }
  ctrl.getGoods();
  
    
  ctrl.getOrders = function () {
    serv.getOrders().then(

      function (resp) {
        console.log(resp)
        $scope.myOrders = resp
        return resp
      }
    )

  }
  ctrl.getOrders();




  $scope.remove = function (item) {
    console.log(item)
//    var index = $scope.myGoods.indexOf(item);
    $scope.myGoods.splice(item, 1);
//    return item
  }
  $scope.add = function () {
    $scope.myGoods.push({
      name: $scope.nameNew,
      category_id: $scope.categoryidNew,
      subcategory_id: $scope.subcategoryidNew,
      amount: $scope.amountNew,
      price: $scope.priceNew,
      weight: $scope.weightNew,
      country: $scope.countryNew,
      description: $scope.descriptionNew
    });
    $scope.nameNew = '';
    $scope.category_idNew = '';
    $scope.subcategory_idNew = '';
    $scope.amountNew = '';
    $scope.priceNew = '';
    $scope.weightNew = '';
    $scope.countryNew = '';
    $scope.descriptionNew = '';

  }


  $scope.removeU = function (item) {
    var index = $scope.users.indexOf(item);
    $scope.users.splice(index, 1);
    return item
  }
  
    $scope.removeO = function (item) {
    var index = $scope.myOrders.indexOf(item);
    $scope.myOrders.splice(index, 1);
    return item
  }
  
  $scope.addU = function () {
    $scope.users.push({
      name: $scope.nameNew,
      sname: $scope.snameNew,
      login: $scope.loginNew,
      pass: $scope.passNew
    
    });
    $scope.nameNew = '';
    $scope.snameNew = '';
    $scope.loginNew = '';
    $scope.passNew = '';
  }
          $scope.users={}
  
      ctrl.getUsers = function () {
          serv.getUsers().then(
  
              function (resp) {
                  console.log(resp)
                  $scope.users=resp
                  return resp
              }
          )
  
      }
   ctrl.getUsers();
  
  //   
  ctrl.users = {};
  ctrl.getUsers = function () {
    serv.getUsers().then(resp => {
      console.log(resp)
      ctrl.users = resp;
    });
  };
  ctrl.getUsers();


  ctrl.checkUser = () => {
    if (serv.user.name && serv.user.sname) {
      ctrl.userName = serv.user; // якщо є в сервісі бере там
    } else {
      ctrl.userName = JSON.parse(localStorage.getItem("userName&Sname")); // якщо не має в сервісі бере з локал сторі
    }
  };
  ctrl.checkUser();
  // тут створюємо пусті обєкти на дані з value (input)
  $scope.loginThisUser = function (email, pass) {
    let login = email;
    let tpass = pass;
    console.log(`${email}  ${pass}`);
    // перебираємо масив який з бази отримали і перевіряємо його
    for (let i in ctrl.users) {
      console.log(`${ ctrl.users[i].login }  ${ ctrl.users[i].pass }`)
      if (ctrl.users[i].login == login && ctrl.users[i].pass == tpass) {

        CurrectUser.name = ctrl.users[i].login
      
        $scope.LoginStatus = true;
        
        if (!localStorage.length) {
          localStorage.setItem("UserID", JSON.stringify(ctrl.users[i].id));
        } else {
          localStorage.clear()
          localStorage.setItem("UserID", JSON.stringify(ctrl.users[i].id));
        }

        if (login == "Admin") {
          $location.path('/admin');
        } else {
          $location.path('/main');
          break
        }

      }
    }
  };
  
  
//  $scope.regUser = function () {
//        ctrl.newUser = {};
//       ctrl.newUser.name = document.getElementById('firstName').value;
//       ctrl.newUser.sname = document.getElementById('lastName').value;
//       ctrl.newUser.mail = document.getElementById('emailReg').value;
//       ctrl.newUser.pass = document.getElementById('passReg').value;
//       ctrl.newUser.day = document.getElementById('dataOfBirth').value;
//       ctrl.newUser.month = document.getElementById('monthOfBirth').value;
//       ctrl.newUser.year = document.getElementById('yearOfBirth').value;
//       if (document.getElementById('male').checked) {
//           ctrl.newUser.gender = document.getElementById('male').value;
//       } else if (document.getElementById('female').checked) {
//           ctrl.newUser.gender = document.getElementById('female').value;
//       }
//       ctrl.newUser.phone = 'noPhone';
//       console.log('register new user');
//       console.log('user + value', ctrl.newUser);
//       mainService.usersData(ctrl.newUser);
//       ctrl.userName.name = ctrl.newUser.name;
//       ctrl.userName.sname = ctrl.newUser.sname;
//       serv.user.name = ctrl.userName.name;
//       serv.user.sname = ctrl.userName.sname;
//       $location.path('/myPage');
//   };
  
  
  
  
  

//$scope.register = (name, sname, login, pass) => {
//var newUser = {
//user: {
//name: $scope.name,
//sname: $scope.sname,
//login: $scope.login,
//pass: $scope.pass}
//};
//console.log(newUser)
//serv.addUser(newUser)
//$location.path('/main');
//};

  
  $scope.checker = {};
    $scope.register = function (user) {
       ctrl.newUser = angular.copy(user);
       console.log(ctrl.newUser);
       alert('Ви успішно зареєстровані!')
       serv.addUser(ctrl.newUser);
       location.reload();

   };
   $scope.checks = function (user) {
       return angular.equals(user, $scope.checker);
   };
  
  
  
  
  $scope.lel = (id) => {
    console.log(id)
  }
  //    
  //    $scope.submit = function(){
  //    var name = $scope.user;
  //    var password = $scope.password;
  //    if($scope.user == 'admin' && $scope.password == 'admin'){
  //      window.location.hash = '#/admin';
  //    }else{
  //        alert('wrong');
  //    }
  //}
  //    



  //    let person =[];
  //    
  //    function locStor() {
  //    if (!localStorage.length) {
  //       localStorage.setItem("obj", JSON.stringify(person))
  //   } else {
  //       localStorage.setItem("obj", JSON.stringify(users))
  //   }
  //}
  //
  //locStor();
  //
  //let newUsers;
  //newUsers = JSON.parse(localStorage.getItem("obj")); 



  //  $scope.users = {};
  //$scope.submit = function () {
  //    $scope.user = '';
  //    $scope.password = '';
  //    if($scope.user == $scope.users.name && $scope.password == $scope.users.pass){
  //  console.log("User logged in with membership no:");
  // }else{
  //     alert('no')
  // }}




  //    
  //$scope.submit = function(){
  //    
  //    (for i in $scope.users)
  //    if ($scope.name == username && $scope.pass == password) {
  //      var user = $scope.username;
  //      var pass = $scope.password;
  //      alert("welcome" + user);
  //
  //      $scope.myusers.push({
  //        username: user,
  //        password: pass
  //      });
  //    } else {
  //      alert("Invalid Login");
  //    }
  //  }




  //    $scope.SaveDataToLocalStorage = function (data) {
  //      if (typeof (Storage) !== "undefined") {
  //        if (sessionStorage.userId) {
  //          alert('You a login in')
  //          sessionStorage.userId = '';
  //        } else {
  //          sessionStorage.userId = data;
  //          alert('login in user with id = ' + data)
  //        }
  //        console.log(sessionStorage.userId)
  //        alert(data)
  //      } else {
  //        alert(data)
  //      }
  //    }
  //
  //
  //   ctrl.getUsers();
  ////    getPosts()
  //    getComments()








  //    localStorage.setItem('myCat', 'Tom');

}]);