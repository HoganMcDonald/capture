app.controller('SearchController', function() {
  var vm = this;




});

$('#searchBar').ready(function() {

  //check if in mobile browser
  if (typeof window.orientation !== 'undefined') {
    //set height of search bar to fixed height

    var viewportHeight = $('#searchBar').outerHeight();
    $('#searchBar, #offsetSearchBar').css({
      height: viewportHeight
    });
  } //end check if mobile

});
