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

    // Disparamos click para el ciclo activo
    $('.2024-01').trigger('click');
});
// ============================================

// ============================================
// menu de navegacion
$(function() {
    $('.box-menu .wrapper').on('click', function(){
        $('.box-menu').toggleClass('full-menu');
        $('.hamburger').toggleClass('active');
    });
    $('a').on('click', function(){
        $(this).siblings('a').removeClass('active');
        $(this).addClass('active');
    });
});
// fin menu de navegacion
// ============================================

// ============================================
// Función para quitar la clase is-active del último li para dispositivos mobiles 
function ajustarProgressBar() {
    var progressBar = document.getElementById('progress-bar');
    if (window.matchMedia('(max-width: 480px)').matches) {
        var items = progressBar.querySelectorAll('li.is-complete');
        for (var i = 0; i < items.length - 1; i++) {
        items[i].classList.remove('is-active');
        }
    } else {
        progressBar.querySelectorAll('li.is-complete').forEach(function(item) {
        item.classList.add('is-active');
        });
    }
}

// Ejecutar la función al cargar la página y al redimensionar la ventana
window.onload = function() {
    ajustarProgressBar();
    window.addEventListener('resize', ajustarProgressBar);
};
// ============================================

// ============================================
// Función para animar el scroll
function animateScroll(element, targetScroll, duration) {
    let start       = element.scrollLeft;
    let currentTime = 0;
    let increment   = 20;

    function animateScrollLoop(timestamp) {
        currentTime += increment;
        const val   =  Math.easeInOutQuad(currentTime, start, targetScroll - start, duration);
        element.scrollLeft = val;
        if (currentTime < duration) {
            requestAnimationFrame(animateScrollLoop);
        }
    }

    animateScrollLoop();
}

var offsetWidth = document.getElementById("scrollContainer").offsetWidth * 10;
// Función para hacer scroll hacia la derecha y luego volver al inicio
function scrollAndReset(scrollContainer) {
    animateScroll(scrollContainer, offsetWidth, 2000);

    setTimeout(() => {
        animateScroll(scrollContainer, 150, 2000);
    }, 2500);
}

// Función para la curva de aceleración y desaceleración (ease-in-out)
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

// Utilizamos IntersectionObserver para detectar cuando el contenedor está en pantalla
const scrollContainer = document.getElementById('scrollContainer');
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollAndReset(scrollContainer);
            // Dejamos de observar una vez ejecutado
            observer.unobserve(entry.target); 
        }
    });
});

observer.observe(scrollContainer);
// ============================================

// ============================================
// Valiudacion en el menu para actualizar la clase activa
$('.menu').on('click', function() {
    if ($('.l-site').hasClass('is-open')) {
        $('.menu').removeClass('is-active');
        $('.l-site').removeClass('is-open');
    } else {
        $('.menu').addClass('is-active');
        $('.l-site').addClass('is-open');
    }
});
// ============================================

// ============================================
// 2024
$('body').on('click', '#ViewMore09', function() {
    var link    = $(this);
    var content = $('.ViewMore09');

    content.animate({
        height: 'toggle'
    });

    if (link.text() === 'Ver mas del Ciclo 01-2024') {
        link.text('Ver menos del Ciclo 01-2024');
        content.css('display', 'block');
    } else {
        link.text('Ver mas del Ciclo 01-2024');
        content.css('height', '0%');
    }
});
// fin 2024

// 2023
$('body').on('click', '#ViewMore08', function() {
    var link    = $(this);
    var content = $('.ViewMore08');

    content.animate({
        height: 'toggle'
    });

    if (link.text() === 'Ver mas del Ciclo 02-2023') {
        link.text('Ver menos del Ciclo 02-2023');
        content.css('display', 'block');
    } else {
        link.text('Ver mas del Ciclo 02-2023');
        content.css('height', '0%');
    }
});

$('body').on('click', '#ViewMore07', function() {
    var link    = $(this);
    var content = $('.ViewMore07');
    
    content.animate({
        height: 'toggle'
    });
    
    if (link.text() === 'Ver mas del Ciclo 01-2023') {
        link.text('Ver menos del Ciclo 01-2023');
        content.css('display', 'block');
    } else {
        link.text('Ver mas del Ciclo 01-2023');
        content.css('height', '0%');
    }
});
// fin 2023

// 2022
$('body').on('click', '#ViewMore05', function() {
    var link    = $(this);
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

$('body').on('click', '#ViewMore06', function() {
    var link    = $(this);
    var content = $('.ViewMore06');

    content.animate({
        height: 'toggle'
    });

    if (link.text() === 'Ver mas del Ciclo 02-2022') {
        link.text('Ver menos del Ciclo 02-2022');
        content.css('display', 'block');
    } else {
        link.text('Ver mas del Ciclo 02-2022');
        content.css('height', '0%');
    }
});
// fin 2022

// 2021
$('body').on('click', '#ViewMore04', function() {
    var link    = $(this);
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

$('body').on('click', '#ViewMore03', function() {
    var link    = $(this);
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
// fin 2021

// 2020
$("#ViewMore02").click(function() {
    var link    = $(this);
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
    var link    = $(this);
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
// fin 2020
// ============================================

// ============================================
// enlaces para 2024
$('.2024-01').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2023').slideUp();
    $('#header-2022').slideUp();
    $('#header-2021').slideUp();
    $('#header-2020').slideUp();

    var content = $('#header-2024');
    if (content.is(':hidden')) {
        fetch('ciclos/2024.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-2024').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});
// fin enlaces para 2024

// enlaces para 2023
$('.2023-01').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2024').slideUp();
    $('#header-2022').slideUp();
    $('#header-2021').slideUp();
    $('#header-2020').slideUp();

    var content = $('#header-2023');
    if (content.is(':hidden')) {
        fetch('ciclos/2023.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-2023').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});

$('#2023-02').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2024').slideUp();
    $('#header-2022').slideUp();
    $('#header-2021').slideUp();
    $('#header-2020').slideUp();

    var content = $('#header-2023');
    if (content.is(':hidden')) {
        fetch('ciclos/2023.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-02-2023').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});
// fin enlaces para 2023

// enlaces para 2022
$('.2022-01').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2024').slideUp();
    $('#header-2023').slideUp();
    $('#header-2021').slideUp();
    $('#header-2020').slideUp();
    
    var content = $('#header-2022');
    if (content.is(':hidden')) {
        fetch('ciclos/2022.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-2022').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});

$('#2022-02').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2024').slideUp();
    $('#header-2023').slideUp();
    $('#header-2021').slideUp();
    $('#header-2020').slideUp();
    
    var content = $('#header-2022');
    if (content.is(':hidden')) {
        fetch('ciclos/2022.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-02-2022').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});
// fin enlaces para 2022

// enlaces para 2021
$('.2021-01').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2024').slideUp();
    $('#header-2023').slideUp();
    $('#header-2022').slideUp();
    $('#header-2020').slideUp();
    
    var content = $('#header-2021');
    if (content.is(':hidden')) {
        fetch('ciclos/2021.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-2021').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});

$('#2021-02').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2024').slideUp();
    $('#header-2023').slideUp();
    $('#header-2022').slideUp();
    $('#header-2020').slideUp();
    
    var content = $('#header-2021');
    if (content.is(':hidden')) {
        fetch('ciclos/2021.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-02-2021').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});
// fin enlaces para 2021

// enlaces para 2020
$('.2020-01').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2024').slideUp();
    $('#header-2023').slideUp();
    $('#header-2022').slideUp();
    $('#header-2021').slideUp();
    
    var content = $('#header-2020');
    if (content.is(':hidden')) {
        fetch('ciclos/2020.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-2020').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});

$('#2020-02').click(function(event) {
    event.preventDefault();

    // ocultamos los demas contenidos
    $('#header-2024').slideUp();
    $('#header-2023').slideUp();
    $('#header-2022').slideUp();
    $('#header-2020').slideUp();
    
    var content = $('#header-2020');
    if (content.is(':hidden')) {
        fetch('ciclos/2020.html')
            .then(response => response.text())
            .then(data => {
                content.html(data);
                content.slideDown();

                setTimeout(() => {
                    document.getElementById('header-02-2020').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }
});

// fin enlaces para 2020






// ============================================

























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

$(".anio-3").click(function() {
 var link = $('#estado-2022');
 var content = $('#2022');
 var separador = $('.separador-anios');
 content.animate({
  height: 'toggle'
 });
 if (link.text() === '2022 +') {
  link.text('2022 -');
  content.css('display', 'block');
  separador.css('border-bottom', 'none');
 } else {
  link.text('2022 +');
  content.css('height', '0%');
  separador.css('border-bottom', '5px solid #77183a');
 }
});





  