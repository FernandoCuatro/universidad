$('.menu').on('click', function() {
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

// 2022
$("#ViewMore05").click(function() {
 var link = $(this);
 var content = $('.ViewMore05');
 content.animate({
  height: 'toggle'
 });
 if (link.text() === 'Ver mas del Ciclo 01-2022') {
  link.text('Ver menos del Ciclo 01-2022');
  content.css('display', 'block');
 } else {
  link.text('Ver mas del Ciclo 01-2022');
  content.css('height', '0%');
 }
});


// 2021
$("#ViewMore04").click(function() {
 var link = $(this);
 var content = $('.ViewMore04');
 content.animate({
  height: 'toggle'
 });
 if (link.text() === 'Ver mas del Ciclo 02-2021') {
  link.text('Ver menos del Ciclo 02-2021');
  content.css('display', 'block');
 } else {
  link.text('Ver mas del Ciclo 02-2021');
  content.css('height', '0%');
 }
});

$("#ViewMore03").click(function() {
 var link = $(this);
 var content = $('.moreview03');
 content.animate({
  height: 'toggle'
 });
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
 content.animate({
  height: 'toggle'
 });
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
 content.animate({
  height: 'toggle'
 });
 if (link.text() === 'Ver mas del Ciclo 01-2020') {
  link.text('Ver menos del Ciclo 01-2020');
  content.csHighlighters('display', 'block');
 } else {
  link.text('Ver mas del Ciclo 01-2020');
  content.css('height', '0%');
 }
});

// Para cada anio
$(".anio").click(function() {
 var link = $('#estado-2020');
 var content = $('#2020');
 content.animate({
  height: 'toggle'
 });
 if (link.text() === '2020 +') {
  link.text('2020 -');
  content.css('display', 'block');
 } else {
  link.text('2020 +');
  content.css('height', '0%');
 }
});

$(".anio-2").click(function() {
 var link = $('#estado-2021');
 var content = $('#2021');
 var separador = $('.separador-anios');
 content.animate({
  height: 'toggle'
 });
 if (link.text() === '2021 +') {
  link.text('2021 -');
  content.css('display', 'block');
  separador.css('border-bottom', 'none');
 } else {
  link.text('2021 +');
  content.css('height', '0%');
  separador.css('border-bottom', '5px solid #77183a');
 }
});


// Efecto para el desplazamiento por las anclas de los id
$(document).ready(function() {
 $('a[href^="#"]').click(function() {
  var destino = $(this.hash);
  if (destino.length == 0) {
   destino = $('a[name="' + this.hash.substr(1) + '"]');
  }
  if (destino.length == 0) {
   destino = $('html');
  }
  $('html, body').animate({
   scrollTop: destino.offset().top
  }, 500);
  return false;
 });
});