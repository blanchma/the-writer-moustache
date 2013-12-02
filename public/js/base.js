
$(document).ready(function(){

  $(window).on('resize', function(){
  })

  $(".divider-mustache").mouseover(function(e) {
     e.preventDefault();
     $(e.target).rotate({
       duration: 2000,
       angle: 0,
       animateTo: 360//angle
     });
  })

 $(".header-mustache").mouseover(function(e) {
   e.preventDefault();
    $(e.target).rotate({
      duration: 2000,
      angle: 0,
      animateTo: 360,
    });
  })
});

var app = {
}
