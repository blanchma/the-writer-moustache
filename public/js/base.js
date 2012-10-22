
$(document).ready(function(){

  //Rotate mustaches in header
  $(".header-mustache").mouseover(function(e) {
    //var angle = $(e.target).data('angle') + 90;
    $(e.target).rotate({
      angle: 0,
      animateTo: 360//angle
   });
    //$(e.target).data('angle', angle);
  })

  //Adapt screen to small screens
  app.adaptToScreen()

  $(window).on('resize', function(){
    app.adaptToScreen()
  })
});

var app = {
  adaptToScreen: function () {
   console.log($(document).width());
   if ($(document).width() < 1000) {
      $(".header-mustache").last().hide();
      $(".header-mustache").first().css({display: 'block', margin: '30px auto 20px auto'});
    } else {
      $(".header-mustache").last().show();
      $(".header-mustache").first().css({display: 'inline'});
    }
  }
}