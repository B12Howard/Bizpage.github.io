$(function () {
  $(".about-toggle").bind("click", function (event) {
    var $el = $(this);
    var $par = $el.parent();
    var $abtContainer = $("#about-container");
    var abtContainerHeight = $("#about-container").height();
    if ($par.children("div").is(":hidden")) {
      $par.children("div").removeClass("hidden");
      $el.addClass("fa-plus").removeClass("fa-minus");
      var h = $par.children("div").height() * 1.2;
      $abtContainer.height(abtContainerHeight + h);
    } else {
      var h = $par.children("div").height() * 1.2;
      $par.children("div").addClass("hidden");
      $el.addClass("fa-minus").removeClass("fa-plus");
      $abtContainer.height(abtContainerHeight - h);
    }
  });
});
