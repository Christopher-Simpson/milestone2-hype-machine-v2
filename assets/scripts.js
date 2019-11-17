$( document ).ready(function() {
    $('.button').mousedown(function() {
        $(this).find('audio.air-horn')[0].play();
    });
    $( ".button" ).mouseup( function() {
        var audio = $(this).find( "audio.air-horn" )[0];
        audio.pause();
        audio.currentTime = 0;
    });
});