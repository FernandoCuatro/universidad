$('.menu').on('click', function(){
  if ($('.l-site').hasClass('is-open')) {
    $('.menu').removeClass('is-active');
  	$('.l-site').removeClass('is-open');
  } else {
    $('.menu').addClass('is-active');
  	$('.l-site').addClass('is-open');
  }
});

// Cambiar cada una de las funciones de Jquery con el id y la clase
// #ViewMore02+++ | .moreview02+++
$("#ViewMore03").click(function() {
  var link = $(this);
  var content = $('.moreview03');

  content.animate({ height: 'toggle' });
  
  if (link.text() === 'Ver mas del Ciclo 01-2021') {
    link.text('Ver menos del Ciclo 01-2021');
    content.css('display', 'block');
  } else {
    link.text('Ver mas del Ciclo 01-2021');
    content.css('height', '0%');
  }

});

// 2020
$("#ViewMore02").click(function() {
  var link = $(this);
  var content = $('.moreview02');
  content.animate({ height: 'toggle' });
  if (link.text() === 'Ver mas del Ciclo 02-2020') {
    link.text('Ver menos del Ciclo 02-2020');
    content.css('display', 'block');
  } else {
    link.text('Ver mas del Ciclo 02-2020');
    content.css('height', '0%');
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

// Para cada anio
$(".anio").click(function() {
  var link = $('#estado-2020');
  var content = $('#2020');
  content.animate({ height: 'toggle' });
  if (link.text() === '2020 +') {
    link.text('2020 -');
    content.css('display', 'block');
  } else {
    link.text('2020 +');
    content.css('height', '0%');
  }
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