import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
  scrollActive: function () {
    let height = $("header").height();
    if ($(window).scrollTop() > height) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  },
  mobile: function () {
    $(".header-hamburger").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("isOpenMenu");
    });
    $(".close-hamburger-menu").on("click", () => {
      $("body").toggleClass("isOpenMenu");
    });
    $(".open-hamburger-menu").on("click", () => {
      $("body").toggleClass("isOpenMenu");
    });
  },
  initVariable: function () {
    const height = $("header").height();
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`
    );
  },
  init: function () {
    headerSearch();
    header.scrollActive();
    header.mobile();
    header.initVariable();
  },
};
document.addEventListener(
  "scroll",
  function (e) {
    header.scrollActive();
  },
  true
);
