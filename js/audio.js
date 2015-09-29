$( document ).ready(function() {

	

 $(document).on('click', '.fa-volume-off, .fa-volume-up', function() {
    var audio = $('audio')[0];
    if (audio.paused) {
      audio.play();
      $('.audio-switch').html('<i class="fa fa-volume-up"></i>')
    } else {
      audio.pause();
      $('.audio-switch').html('<i class="fa fa-volume-off"></i>')
    }
  });

});

 