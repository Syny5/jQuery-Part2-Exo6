$(document).ready(function(){
  $('.color').hover(function(){
    var colorChange = $(this).attr('class').split(' ')[1];
    $('#text').css('color', colorChange);
  }, function(){
    $('#text').css('color', 'inherit');
  });
});
