angular.module( 'ngBoilerplate.login', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'loginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Jumbotail | Login page' }
  });
})

// .controller( 'loginCtrl',function AboutCtrl( $scope ) {
//   $scope.activeForm = 'login-form';
//   $scope.changeForms = function(formName) {
//     $scope.activeForm = formName;
//   };
//   $scope.userInfo = null;
//   $scope.login = function () {
//       authenticationSvc.login($scope.userName, $scope.password)
//           .then(function (result) {
//               $scope.userInfo = result;
//               $location.path("/");
//           }, function (error) {
//               $window.alert("Invalid credentials");
//               console.log(error);
//           });
//   };
//
// })

.controller("loginCtrl", ["$scope", "$location", "$window", "authenticationSvc",function ($scope, $location, $window, authenticationSvc) {
    $scope.activeForm = 'login-form';
    $scope.changeForms = function(formName) {
      $scope.activeForm = formName;
    };
    $scope.userName = "first@gmail.com";
    $scope.userInfo = null;
    $scope.login = function () {
        var login = authenticationSvc.login($scope.userName, $scope.password);
        if(login){
          $scope.userInfo = 'sadadsad';
          $location.path("/about");
        } else {
          $scope.loginFailed = true;
        }
    };

    $scope.cancel = function () {
        $scope.userName = "";
        $scope.password = "";
    };
}])
;
