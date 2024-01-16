$(function () {
  function slideMenu() {
    var activeState = $('#menu-container .menu-list').hasClass('active');
    $('#menu-container .menu-list').animate(
      { left: activeState ? '0%' : '-100%' },
      400
    );
  }
  $('#menu-wrapper').click(function (event) {
    event.stopPropagation();
    $('#hamburger-menu').toggleClass('open');
    $('#menu-container .menu-list').toggleClass('active');
    slideMenu();

    $('body').toggleClass('overflow-hidden');
  });

  //onHover function
  $(document).on('mouseover', '.media-content', function () {
    $(this).find('.image').css('display', 'none');
    $(this).find('.video').css('display', 'block');
  });

  //play video on hover
  $(document).on('mouseover', 'video', function () {
    $(this).get(0).muted = true;
    $(this).get(0).load();
    $(this).get(0).play();
  });

  //pause video on mouse leave
  $(document).on('mouseleave', 'video', function () {
    $(this).get(0).currentTime = 0;
    $(this).get(0).pause();
    //hideVideo
    $(this).css('display', 'none');
    $(this).find('.image').css('display', 'block');
  });

  //show video controls on Click
  $(document).on('click', 'video', function () {
    if ($(this).attr('controls')) {
      $(this).removeAttr('controls');
    } else {
      $(this).attr('controls', '');
    }
  });
}); // jQuery load
