

$('.menu').on('click', function(){
  if ($('.l-site').hasClass('is-open')) {
    $('.menu').removeClass('is-active');
  	$('.l-site').removeClass('is-open');
  } else {
    $('.menu').addClass('is-active');
  	$('.l-site').addClass('is-open');
  }
});


$("#ViewMore").click(function() {
  var link = $(this);
  var content = $('.moreview');

  content.animate({ height: 'toggle' });
  
  if (link.text() === 'Ver mas del Ciclo 01-2020') {
    link.text('Ver menos del Ciclo 01-2020');
    content.css('display', 'block');
  } else {
    link.text('Ver mas del Ciclo 01-2020');
    content.css('height', '0%');
  }

});

lightGallery(document.getElementById('lightgallery'), {
    thumbnail: true
});

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});

