$(function() {
  $(".about-toggle").bind("click", function(event) {
    var $el = $(this);
    var $par = $el.parent();
    var $abtContainer = $("#about-container");
    var abtContainerHeight = $("#about-container").height();
    console.log("about container");
    console.log($abtContainer.height());
    console.log($par.children("div").height());
    if ($par.children("div").is(":hidden")) {
      $par.children("div").removeClass("hidden");
      $el.addClass("fa-plus").removeClass("fa-minus");
      console.log($par.children("div").height());
      var h = $par.children("div").height();
      $abtContainer.height(abtContainerHeight + h);
    } else {
      var h = $par.children("div").height();
      $par.children("div").addClass("hidden");
      $el.addClass("fa-minus").removeClass("fa-plus");
      console.log($par.children("div").height());

      $abtContainer.height(abtContainerHeight - h);
    }
  });
});
