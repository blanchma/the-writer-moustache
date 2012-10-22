
$(document).ready(function(){
  $(".header-mustache").mouseover(function(e) {
    var angle = $(e.target).data('angle') + 90;
    $(e.target).rotate({
      animateTo: angle
   });
    $(e.target).data('angle', angle);
  })
});