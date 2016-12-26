'use strict';

var slider;

$(document).ready(function() {
  slider = $('#slider').unslider({ autoplay: true, delay: 5000 });
  $('#slider').css('opacity', 1);

});

$(document).on('touchstart mouseover', '.slide', function(event) {
  event.preventDefault();
  slider.unslider('stop');
});

$(document).on('touchend mouseout', '.slide', function(event) {
  event.preventDefault();
  slider.unslider('start');
});