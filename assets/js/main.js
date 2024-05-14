(function ($) {
  "use strict";

  $(window).on("load", function () {
    /* 
   MixitUp
   ========================================================================== */
    $("#portfolio").mixItUp();

    /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $(".onepage-nev");
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: "active",
      scrollOffset: top_offset,
    });

    /*Page Loader active
    ========================================================*/
    $("#preloader").fadeOut();

    // Sticky Nav
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 200) {
        $(".scrolling-navbar").addClass("top-nav-collapse");
      } else {
        $(".scrolling-navbar").removeClass("top-nav-collapse");
      }
    });

    /* slicknav mobile menu active  */
    $(".mobile-menu").slicknav({
      prependTo: ".navbar-header",
      parentTag: "liner",
      allowParentLinks: true,
      duplicate: true,
      label: "",
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false,
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $(".lightbox").nivoLightbox({
      effect: "fadeScale",
      keyboardNav: true,
    });

    /* Counter
    ========================================================*/
    $(".counterUp").counterUp({
      delay: 10,
      time: 1000,
    });

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $(".back-to-top").fadeIn(400);
      } else {
        $(".back-to-top").fadeOut(400);
      }
    });

    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });

  const dateStart = document.querySelectorAll(".initial-date");
  const dateEnd = document.querySelectorAll(".end-date");
  const totalWorked = document.querySelectorAll('.total-working');

  totalWorked.forEach((element, index) => {
    element.innerHTML = `(${calculateDate(dateStart[index], dateEnd[index])})`;

  });

  function calculateDate(dateStart, dateEnd) {
    const esFechaActual = dateEnd.textContent
      .toLowerCase()
      .includes("currently");
    const partialStartDate = dateStart.innerHTML.trim().split(" ");

    let startDate = new Date(
      `${partialStartDate[0]} 01 ${partialStartDate[1]}`
    );
    let endDate = getCurrentDate();

    if (!esFechaActual) {
      const partialEndDate = dateEnd.innerHTML.trim().split(" ");
      endDate = new Date(`${partialEndDate[0]} 01 ${partialEndDate[1]}`);
    }

    return subtractDates(startDate, endDate)
  }

  function getCurrentDate() {
    var currentDate = new Date();

    return FormatDate(currentDate);
  }

  function FormatDate(date) {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Agrega un cero inicial si el mes es < 10
    const day = ("0" + date.getDate()).slice(-2); // Agrega un cero inicial si el día es < 10

    return new Date(year + "-" + month + "-" + day);
  }

  function subtractDates(initialDate, endDate) {
    const recentsMonths = (endDate.getFullYear() - 1970) * 12 + endDate.getMonth();
    const oldsMonths = (initialDate.getFullYear() - 1970) * 12 + initialDate.getMonth();

    const monthsDifference = recentsMonths - oldsMonths;

    const fullYears = Math.floor(monthsDifference / 12);

    const remainingMonths = monthsDifference % 12;

     return `${fullYears} years ${remainingMonths} months`;

  }
})(jQuery);
