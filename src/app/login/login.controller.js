(function() {
  'use strict';

  angular
    .module('forecastAngular')
    .controller('LoginController', loginController);

  /** @ngInject */
  function loginController(toastr, $location, $http, $window) {
    var this_ = this;
    this_.loginTitle = "Please enter your PwC GUID & Password to login";
    this_.guidLabel = "PwC GUID:";
    this_.passwordLable = "Password:";
    this_.login = "login";
    this_.popupForGuid = "Please enter your PWC GUID";
    this_.popupForPassword = "Only combinations of numbers, underscores and letters";
    this_.alertMessage = "";

    this.adminLogin = function() {
        var params = {};
        params.username = this.guid;
        params.password = this.password;
        $http.post('/api/login', params)
          .success(function (response) {
            // $window.sessionStorage.token = data.token;
            if (response) {
                $location.path("/");
                this_.alertMessage = '';
            } else {
                this_.alertMessage = 'Error: Invalid user or password';
            }
          })
          .error(function (response) {
            // delete $window.sessionStorage.token;

            this_.alertMessage = 'Login failed, please try again later';
          });
    };

  }
})();
