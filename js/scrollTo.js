$(document).ready(function () {
let imageHeight = $('.home__container').height();
  $("#about-me-link").click(function () {
    $("body,html").animate(
      {
        scrollTop: imageHeight,
      },
      400
    );
  });
});
