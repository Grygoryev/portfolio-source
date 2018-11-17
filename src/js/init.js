var circle = $('.circle'),
    popupMenu = $('#popup-menu'),
    closeMenubtn = $('.menu__close-btn');

circle.on('click', function () {
  popupMenu.removeClass('js-hidden');
  popupMenu.removeClass('hideShrink');
  popupMenu.addClass('showUp');
});

closeMenubtn.on('click', function () {
  setTimeout(function() {
    popupMenu.addClass('hideShrink');
  }, 0)

  setTimeout(function () {
    popupMenu.removeClass('showUp');
  }, 600);
});