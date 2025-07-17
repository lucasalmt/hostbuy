$(document).ready(function () {
  // Sombra no topo ao rolar
  $(window).on('scroll', function () {
    const header = $('.navbar-container');
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.1)');
    }
  });

  // Animações com ScrollReveal
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({ reset: true });

    // Animação da seção principal
    sr.reveal('.main-bunner', {
      duration: 1600,
      distance: '60px',
      origin: 'top',
      opacity: 0,
    });

    // Animação dos cards de serviço
    sr.reveal('.services-container li', {
      duration: 1500,
      distance: '50px',
      origin: 'bottom',
      interval: 200,
    });

    // Animação dos planos
    sr.reveal('.plan', {
      duration: 1500,
      distance: '50px',
      origin: 'right',
      interval: 200,
    });

    sr.reveal('.searchdomain-container', {
      duration: 1600,
      distance: '60px',
      origin: 'bottom',
      interval: 200,
    });
  }
});
