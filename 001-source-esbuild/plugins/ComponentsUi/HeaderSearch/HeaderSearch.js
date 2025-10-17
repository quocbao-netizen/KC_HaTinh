export function headerSearch() {
  function closeSearch() {
    $(".header-search-form").removeClass("active");
    $(".open-search-mobile").removeClass("active");
    $("body").removeClass("disable");
  }
  $(".open-search-mobile").on("click", function () {
    $(".header-search-form").addClass("active");
    $("body").addClass("disable");
    setTimeout(() => {
      $(".header-search-form .searchinput").focus();
    }, 400);
  });
  $(".header-search-form .close").on("click", function () {
    closeSearch();
  });
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      closeSearch();
    }
  });
  $(document).on("click", function (e) {
    if ($(".header-search-form").hasClass("active")) {
      if (
        !$(e.target).closest(".productsearchbox").length &&
        !$(e.target).is(".open-search-mobile") &&
        !$(e.target).closest(".open-search-mobile").length
      ) {
        closeSearch();
      }
    }
  });
}
