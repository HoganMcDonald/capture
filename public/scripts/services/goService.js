//begin go service
app.service('GoService', function($location, $anchorScroll) {
  var gs = this;
  //a function that changes the $location.hash
  gs.goToPage = function(partialName) {
    $location.url(partialName);
    $anchorScroll();
  }; //end go function
});
