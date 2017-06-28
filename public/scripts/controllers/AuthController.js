app.controller('AuthController', function(AuthService, GoService) {
  var vm = this;

  //registers a new user in DB
  vm.registerUser = function() {
    //check if passwords match
    if (vm.password == vm.passwordConfirm) {
      //packages up credentials
      var credentialObject = {
        username: vm.username,
        password: vm.password,
        email: vm.email
      };
      AuthService.postUser(credentialObject)
        .then(function(response) {
          GoService.goToPage('/');
        });
    }

  }; //end registerUser

  //logs user in
  vm.loginUser = function() {
    // credentials package
    var credentialObject = {
      username: vm.username,
      password: vm.password
    };
    AuthService.postLogin(credentialObject)
      .then(function(response) {
        if (response.data == 'we got it') {
          GoService.goToPage('/input');
        } else {
          vm.username = 'Login Failed';
          vm.password = '';
        }

      });
  }; //end log in user

}); //end controller
