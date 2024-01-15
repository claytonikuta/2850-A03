$(function() {
    function slideMenu() {
      var activeState = $(".nav-mobile-container").hasClass("active");
      // $("#menu-container .nav-mobile-conatainer").css({left: activeState ? "0%" : "-100%"}, 400);
    }
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $(".nav-mobile-container").toggleClass("active");
      // slideMenu();
  
      $("body").toggleClass("overflow-hidden");
    });
  

  }); // jQuery load
  