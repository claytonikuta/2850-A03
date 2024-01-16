$(document).ready(function () {
  var feature = $('#feature-article-carousel');

  feature.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
      '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
    ]
  });
});

$(function () {
  function slideMenu() {
    var activeState = $('.nav-mobile-container').hasClass('active');
    // $("#menu-container .nav-mobile-conatainer").css({left: activeState ? "0%" : "-100%"}, 400);
  }
  $('#hamburger-menu-button').click(function (event) {
    event.stopPropagation();
    $('.nav-mobile-container').toggleClass('active');
    // slideMenu();

    $('body').toggleClass('overflow-hidden');
  });

  //add a faded out play icon on article images that have a videos associated
  const $playIcon = $('<i></i>').addClass('fa fa-play play-icon');
  $('.media-content').find('video').parent().prepend($playIcon);

  //play video on mouseover the article image
  $(document).on('mouseover', '.media-content', function () {
    const $video = $(this).find('video');
    //if video is given, hide image and play-icon then play video
    if ($video.length) {
      $(this).find('img').css('display', 'none');
      $(this).find('.play-icon').css('display', 'none');
      $video.css('display', 'block');
      $video.get(0).muted = true;
      $video.get(0).currentTime = 0;
      $video.get(0).play();
    }
  });

  //show article image again on mouseleave video
  $(document).on('mouseleave', '.media-content', function () {
    const $video = $(this).find('video');
    //if video was given, hide it and show article image again
    if ($video.length) {
      $(this).find('img').css('display', 'block');
      $(this).find('.play-icon').css('display', 'inline-block');
      $video.css('display', 'none');
      $video.get(0).pause();
    }
  });
}); // jQuery load
