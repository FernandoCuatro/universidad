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

  // Función para hacer scroll hacia la derecha y luego volver al inicio
  function scrollAndReset(scrollContainer) {
    animateScroll(scrollContainer, 50000, 2000);
    
    // Esperar un momento antes de regresar al inicio
    setTimeout(() => {
      animateScroll(scrollContainer, 150, 2000);
    }, 2000 + 100); // Ajustar el tiempo para asegurar que la animación se haya completado
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
        // Cuando el contenedor está en pantalla, ejecutamos la animación
        scrollAndReset(scrollContainer);
        observer.unobserve(entry.target); // Dejamos de observar una vez ejecutado
      }
    });
  });

  observer.observe(scrollContainer);








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

// Cambiar cada una de las funciones de Jquery con el id y la clase
// #ViewMore02+++ | .moreview02+++

// 2024
$("#ViewMore09").click(function() {
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
$("#ViewMore08").click(function() {
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

$("#ViewMore07").click(function() {
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
$("#ViewMore05").click(function() {
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

$("#ViewMore06").click(function() {
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
$("#ViewMore04").click(function() {
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

$("#ViewMore03").click(function() {
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





  