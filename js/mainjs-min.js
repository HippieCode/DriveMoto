$(function(){$(".banner-section__slider").slick({dots:!0,prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>'}),$(".product-slider").slick({slidesToShow:4,slidesToScroll:1,prevArrow:'<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',nextArrow:'<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',responsive:[{breakpoint:1274,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,arrows:!1,dots:!0}},{breakpoint:992,settings:{arrows:!1,slidesToShow:2,dots:!0,slidesToScroll:1}},{breakpoint:733,settings:{arrows:!1,slidesToShow:1,dots:!0,slidesToScroll:1}}]}),$(".tab").on("click",function(t){t.preventDefault(),$($(this).siblings()).removeClass("tab--active"),$($(this).parent().siblings().find("div")).removeClass("tabs-content--active"),$(this).addClass("tab--active"),$($(this).attr("href")).addClass("tabs-content--active"),$(".product-slider").slick("reinit")}),$(".product-item__favorite").on("click",function(){$(this).toggleClass("product-item__favorite--active")}),$(".filter-style").styler(),$(".filter__item-drop, .filter__extra").on("click",function(){$(this).toggleClass("filter__item-drop--active"),$(this).next("").slideToggle(200)}),$(".js-range-slider").ionRangeSlider({gird:!1,type:"double",min:1e5,max:5e5}),$(".catalog__filter-btngrid").on("click",function(){$(this).addClass("catalog__filter-button--active"),$(".catalog__filter-btnline").removeClass("catalog__filter-button--active"),$(".product-item__wrapper").removeClass("product-item__wrapper--list")}),$(".catalog__filter-btnline").on("click",function(){$(this).addClass("catalog__filter-button--active"),$(".catalog__filter-btngrid").removeClass("catalog__filter-button--active"),$(".product-item__wrapper").addClass("product-item__wrapper--list")}),$(".burger__menu").on("click",function(){$(".header").addClass("header__active"),$(".burger__menu-close").on("click",function(){$(".header").removeClass("header__active")})})}),$(function(){$(".rate-yo").rateYo({normalFill:"#C4C4C4",ratedFill:"#1C62CD",spacing:"7px"}),$(".product-item__general").slick({autoplay:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,fade:!1,asNavFor:".product-item__general-nav"}),$(".product-item__general-nav").slick({slidesToShow:3,slidesToScroll:3,asNavFor:".product-item__general",infinite:!1,dots:!1,focusOnSelect:!0})});