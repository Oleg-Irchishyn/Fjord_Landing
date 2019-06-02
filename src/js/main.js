
//STICKY HEADER FUNCTION

window.onscroll = function () { ScrollHeader() };

var header = document.querySelector(".header");
var sticky = header.offsetTop;

function ScrollHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


/* FUNCTION THAT TOGGLES ACTIVENAVITEM CLASS FOR NAVIGATION LISTING ITEMS IN HEADER*/

function toggleHeaderNavItemClass() {

  let headerNavListItem = $('.header_main_nav .nav_listing .listing_item a');

  headerNavListItem.hover(function () {
    $('.activeNavitem').removeClass('activeNavitem');
    $(this).addClass('activeNavitem');
  },
    function () {
      headerNavListItem.removeClass('activeNavitem');
      $(this).removeClass('activeNavitem');
    }
  )

  headerNavListItem.focus(function () {
    $('.activeNavitem').removeClass('activeNavitem');
    $(this).addClass('activeNavitem');
  },
    function () {
      headerNavListItem.removeClass('activeNavitem');
      $(this).removeClass('activeNavitem');
    }
  )
}

toggleHeaderNavItemClass();

/* CLICK FUNCTION ON THE BURGER ITEM THAT TOGGLES APPERANCE OF THE NAVIGATION MENU WITH BUTTON IN HEADER FOR SMALL DEVICES*/

function triggerBurgerMenu() {
  let burger_mobile = $('.burger_mobile');
  let headerMainNav = $('.header_main_nav');
  let headerMainBtn = $('.btn.header_btn');

  burger_mobile.click(function () {
    $(this).toggleClass("change");
    headerMainNav.toggle();
    headerMainBtn.toggle();
  });
}

triggerBurgerMenu();

/*FUNCTION THAT TOGGLES HIGHLIGHTED CLASS FOR PRICES LISTING ITEMS*/

function togglePriceHighlightedClass() {

  let pricesListItem = $('.prices_listing .listing_item');

  pricesListItem.hover(function () {
    $('.highlightedListingItem').removeClass('highlightedListingItem');
    $(this).addClass('highlightedListingItem');
  },
    function () {
      pricesListItem.removeClass('highlightedListingItem');
      $(this).removeClass('highlightedListingItem');
    }
  )

  pricesListItem.focus(function () {
    $('.highlightedListingItem').removeClass('highlightedListingItem');
    $(this).addClass('highlightedListingItem');
  },
    function () {
      pricesListItem.removeClass('highlightedListingItem');
      $(this).removeClass('highlightedListingItem');
    }
  )
}

togglePriceHighlightedClass()

/* IPHONE CAROUSEL WITH CODE THAT CHANGES BACKGROUND OF THE PRODUCT PRESENTATION SECTION WHEN NEXT AND PREVIOUS ARROWS ARE CLICKED + IPAD AND GALLERY CAROUSELS */

let iPhoneCarousel = $('.product_presentation_carousel');
let productPresentationSection = $('.product_presentation');

iPhoneCarousel.slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '<div class="prev animated fast"></div>',
  nextArrow: '<div class="next animated fast"></div>'
}),
  colorSettings = {
    background: ['#26e6e6', 'grey', 'green']
  },
  changeColors = function (slide) {
    productPresentationSection.css({
      background: colorSettings.background[slide],
      transition: '.4s ease'
    });
  };

changeColors(0);

iPhoneCarousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  changeColors(nextSlide);
});

// IPAD CAROUSEL CODE

let iPadCarousel = $('.additional_product_presentaion_carousel');

iPadCarousel.slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '<div class="prev_arrow animated fast"></div>'
});

// QUOTES CAROUSEL CODE + GALLERY CAROUSEL CODE

let carousel = $(".carousel");

carousel.each(function (index) {
  $(this).slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          vertical: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 1599,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          infinite: true,
          dots: false,
          arrows: false
        }
      }
    ]
  });
});

/*SCROLL ANIMATIONS*/

$(window).load(function () {

  var screen1 = $(".header .left_part");
  var screen2 = $(".header_main_nav");
  var screen3 = $(".header_btn");
  var screen4 = $(".header .right_part");
  var screen5 = $(".hero_screen_message");
  var screen6 = $(".features_item_first");
  var screen7 = $(".features_item_second");
  var screen8 = $(".features_item_last");
  var screen9 = $(".product_presentation_carousel");
  var screen10 = $(".first_banner_item");
  var screen11 = $(".second_banner_item");
  var screen12 = $(".third_banner_item");
  var screen13 = $(".product_presentation_banner button");
  var screen14 = $(".build_website_message h2");
  var screen15 = $(".build_website_message p");
  var screen16 = $(".additional_features_listing .listing_item.first_item");
  var screen17 = $(".additional_features_listing .listing_item.second_item");
  var screen18 = $(".additional_features_listing .listing_item.last_item");
  var screen19 = $(".additional_product_presentaion_message h2");
  var screen20 = $(".additional_product_presentaion_message p");
  var screen21 = $(".additional_product_presentaion_message button");
  var screen22 = $(".additional_product_presentaion_carousel");
  var screen23 = $(".platform_features_message h3");
  var screen24 = $(".platform_features_message span");
  var screen25 = $(".platform_features_listing .listing_item:nth-of-type(1)");
  var screen26 = $(".platform_features_listing .listing_item:nth-of-type(2)");
  var screen27 = $(".platform_features_listing .listing_item:nth-of-type(3)");
  var screen28 = $(".platform_features_listing .listing_item:nth-of-type(4)");
  var screen29 = $(".platform_features_listing .listing_item:nth-of-type(5)");
  var screen30 = $(".platform_features_listing .listing_item:nth-of-type(6)");
  var screen31 = $(".prices_listing .listing_item:nth-of-type(1)");
  var screen32 = $(".prices_listing .listing_item:nth-of-type(2)");
  var screen33 = $(".prices_listing .listing_item:nth-of-type(3)");
  var screen34 = $(".footer_title");
  var screen35 = $(".footer_entry .entry_logo");
  var screen36 = $(".footer_entry .entry_listing:nth-of-type(1)");
  var screen37 = $(".footer_entry .entry_listing:nth-of-type(2)");
  var screen38 = $(".footer_entry .entry_listing:nth-of-type(3)");
  var screen39 = $(".footer_entry .entry_author");
  var screen40 = $(".footer_entry .entry_social_group");
  var screen41 = $(".quotes_carousel");
  var screen42 = $(".gallery_title");
  var screen43 = $(".gallery_carousel .first_image");
  var screen44 = $(".gallery_carousel .second_image");
  var screen45 = $(".gallery_carousel .third_image");
  var screen46 = $(".gallery_carousel .fourth_image");
  var screen47 = $(".gallery_carousel .fifth_image");
  var screen48 = $(".gallery_carousel .sixth_image");
  var screen49 = $(".gallery_carousel .last_image");
  var screen50 = $(".join_us_message");


  var screens = [
    screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10,
    screen11, screen12, screen13, screen14, screen15, screen16, screen17, screen18, screen19,
    screen20, screen21, screen22, screen23, screen24, screen25, screen26, screen27, screen28,
    screen29, screen30, screen31, screen32, screen33, screen34, screen35, screen36, screen37,
    screen38, screen39, screen40, screen41, screen42, screen43, screen44, screen45, screen46,
    screen47, screen48, screen49, screen50
  ]

  var windowHeight = $(window).height();

  function scrollPoints() {
    var scroll = $(window).scrollTop() + windowHeight;

    for (let i = 0; i < screens.length; i++) {
      if (scroll > screens[i].offset().top) {
        screens[i].addClass("fadeInUp");
      }
    }
  }

  checkVisibleElements();

  function checkVisibleElements() {
    scrollPoints();
    window.requestAnimationFrame(checkVisibleElements)
  }
});

