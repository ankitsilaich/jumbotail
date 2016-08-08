angular.module( 'ngBoilerplate.login', [
  'ui.router',
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

.controller("loginCtrl", ["$scope", "$location", "$window", "authenticationSvc",function ($scope, $location, $window, authenticationSvc) {
    $scope.activeForm = 'login-form';
    if(authenticationSvc.getUserInfo()){
      $location.path("/orders");
    }
    $scope.changeForms = function(formName) {
      $scope.activeForm = formName;
    };
    $scope.userName = "first@jumbotail.com";
    $scope.userInfo = null;
    $scope.login = function () {
        var login = authenticationSvc.login($scope.userName, $scope.password);
        if(login){
          $scope.userInfo = 'sadadsad';
          $location.path("/orders");
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
