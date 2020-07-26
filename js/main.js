// Smooth Scroll
$('#navbar a').on('click', function (e) {
  if (this.has != '') {
    e.preventDefault();
    var navbarHeight = $('#navbar').height();
    //Target body and animate to it
    $('html, body').animate(
      {
        scrollTop: $(this.hash).offset().top - navbarHeight,
      },
      800
    );
  }
});

// Hide/Show
$(document).ready(function () {
  $('.song-lyrics-btn-archie').click(function () {
    $('.song-lyrics-archie').toggle();
  });
});
