$(function () {
  $('div.small, div.middle, div.large').click(function() {
    $(this).fadeOut(900);
  });
  $('.eyeball').click(function(event) {
    $(this).animate({'top': '-=20px'}, 300);
    $(this).animate({'top': '+=20px'}, 300);
    event.stopPropagation();
  });
  $('div.small, div.middle, div.large').on('mouseenter', function() {
    $(this).animate({'left': '+=20px'}, 300);
  });
  $('div.small, div.middle, div.large').on('mouseleave', function() {
    $(this).animate({'left': '-=20px'}, 300);
  });
});
