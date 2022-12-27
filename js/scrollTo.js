$(document).ready(function () {
let imageHeight = $('.home__container').height() + 60;
  $("#about-me-link").click(function () {
    $("body,html").animate(
      {
        scrollTop: imageHeight,
      },
      400
    );
  });
});
