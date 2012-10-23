
$(document).ready(function(){


  //Adapt screen to small screens
  app.adaptToScreen()

  $(window).on('resize', function(){
    app.adaptToScreen()
  })
});

var app = {
  adaptToScreen: function () {
   if ($(document).width() < 1000) {
      $(".header-mustache").last().hide();
      $(".header-mustache").first().css({display: 'block', margin: '30px auto 20px auto'});

       //Rotate mustaches in header
       $(".header-mustache").unbind('mouseover');
      $(".header-mustache").mouseover(function(e) {
        $(e.target).rotate({
          angle: 0,
          animateTo: 360//angle
       });
      })

    } else {

      $(".header-mustache").last().show();
      $(".header-mustache").first().css({display: 'inline', margin: '0 25px 0 25px'});
      $(".header-mustache").unbind('mouseover');
      //Rotate mustaches in header
      $(".header-mustache").mouseover(function(e) {
        var angle = $(e.target).data('angle') + 90;
        $(e.target).rotate({
          animateTo: angle
       });
        $(e.target).data('angle', angle);
      })

    }
  }
}