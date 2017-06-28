app.service('AuthService', function($http) {
  var as = this;

  as.postUser = function(obj) {
    return $http.post('/auth', obj).then(function(response) {
      return response;
    });
  };

  as.postLogin = function(obj) {
    return $http.post('/', obj).then(function(response) {
      return response;
    });
  };

});
