$(function() {
  $(".about-toggle").bind("click", function(event) {
    var $el = $(this);
    var $par = $el.parent();
    console.log("TEXTfasdf");
    if ($par.children("div").is(":hidden")) {
      $par.children("div").removeClass("hidden");
      $el.addClass("fa-plus").removeClass("fa-minus");
    } else {
      $par.children("div").addClass("hidden");
      $el.addClass("fa-minus").removeClass("fa-plus");
    }
  });
});
