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
  $('#song-video-btn-monkey').click(function () {
    $('#song-video-monkey').toggle();
  });

  $('.song-lyrics-btn').click(function (e) {
    var song = e.target.id.replace('song-lyrics-btn', '');
    song = song.replace('-', '');
    var lyricsPath = 'lyrics/';

    switch (song) {
      case 'archies':
        lyricsPath += 'ArchiesSong.html';
        break;
      case 'cheguevara':
        lyricsPath += 'BlackCheGeuvaraBeret.html';
        break;
      case 'bevinboy':
        lyricsPath += 'BevinBoy.html';
        break;
    }

    $('#lyrics-content').empty();

    $.get(lyricsPath, function (data) {
      var lines = data.split('\n');
      $('#lyrics-content').append(data);
    });

    document.getElementById('song-lyrics-overlay').style.display = 'block';
  });

  $('#close-lyrics').click(function () {
    document.getElementById('song-lyrics-overlay').style.display = 'none';
  });

  $(window).click(function () {
    if (event.target == document.getElementById('song-lyrics-overlay')) {
      document.getElementById('song-lyrics-overlay').style.display = 'none';
    }
  });
});
