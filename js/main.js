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
  $('#song-lyrics-btn-archies').click(function () {
    $('#song-lyrics-archies').toggle();
  });
});

// Hide/Show
$(document).ready(function () {
  $('#song-video-btn-monkey').click(function () {
    $('#song-video-monkey').toggle();
  });
});
