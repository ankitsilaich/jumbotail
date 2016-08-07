angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.about',
  'ngBoilerplate.login',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/login' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location,$rootScope ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });

  $rootScope.$on("$routeChangeSuccess", function (userInfo) {
      console.log(userInfo);
  });

  $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {
      if (eventObj.authenticated === false) {
          $location.path("/login");
      }
  });
})

.factory("authenticationSvc", ["$http","$q","$window","$timeout",function ($http, $q, $window, $timeout) {
    var userInfo;

    function login(userName, password) {
        // var deferred = $q.defer();
        if(userName == 'first@gmail.com'){
          userInfo = {
            userName: userName,
            isFirst: true
          };

        } else if(userName == 'second@gmail.com'){
          userInfo = {
            userName: userName,
            isFirst: false
          };
        } else {
          return false;
        }
        $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
        return true;


        // $http.post("/api/login", { userName: userName, password: password })
        //     .then(function (result) {
                // userInfo = {
                //     accessToken: result.data.access_token,
                //     userName: result.data.userName
                // };
                // $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
        //         deferred.resolve(userInfo);
        //     }, function (error) {
        //         deferred.reject(error);
        //     });
        //
        // return deferred.promise;
    }

    function logout() {
      userInfo = null;
      $window.sessionStorage["userInfo"] = null;
        // var deferred = $q.defer();
        //
        // $http({
        //     method: "POST",
        //     url: "/api/logout",
        //     headers: {
        //         "access_token": userInfo.accessToken
        //     }
        // }).then(function (result) {
        //     userInfo = null;
        //     $window.sessionStorage["userInfo"] = null;
        //     deferred.resolve(result);
        // }, function (error) {
        //     deferred.reject(error);
        // });
        //
        // return deferred.promise;
    }

    function getUserInfo() {
        return userInfo;
    }

    function init() {
        if ($window.sessionStorage["userInfo"]) {
            userInfo = JSON.parse($window.sessionStorage["userInfo"]);
        }
    }
    init();

    return {
        login: login,
        logout: logout,
        getUserInfo: getUserInfo
    };
}]);
