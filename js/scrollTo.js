$(document).ready(function () {
let imageHeight = $('.first-section-wrapper').height()
  $("#some_id").click(function () {
    $("body,html").animate(
      {
        scrollTop: imageHeight,
      },
      400
    );
  });
});
