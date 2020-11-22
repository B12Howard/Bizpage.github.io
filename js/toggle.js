$(function () {
  $(".about-toggle").bind("click", function (event) {
    var $el = $(this);
    var $par = $el.parent();
    var $abtContainer = $("#about-container");
    var abtContainerHeight = $("#about-container").height();
    console.log(abtContainerHeight);
    if ($par.children("div").is(":hidden")) {
      $par.children("div").removeClass("hidden");
      $el.addClass("fa-minus").removeClass("fa-plus");
      var h = $par.children("div").height() * 1.5;
      $abtContainer.height(abtContainerHeight + h);
      console.log($abtContainer.height());
    } else {
      var h = $par.children("div").height() * 1.5;
      $par.children("div").addClass("hidden");
      $el.addClass("fa-plus").removeClass("fa-minus");
      $abtContainer.height(abtContainerHeight - h);
      console.log($abtContainer.height());
    }
  });
});
