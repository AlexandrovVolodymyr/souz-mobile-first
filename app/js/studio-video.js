$(document).on('click', '.video-poster', function () {
  let $video = $('.video-frame'),
      src = $video.attr('src');

  // $('.video-poster').fadeOut(300);
  $video.attr('src', src + '&autoplay=1');
});