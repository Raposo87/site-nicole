// Agora, adicione este código ao seu arquivo script.js
document.addEventListener('DOMContentLoaded', function() {
    // Configuração básica do ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 300,
        easing: 'ease-in-out',
        reset: false
    });

    // Revelar elementos de cada seção
    // Naturopatia
    sr.reveal('.naturopatia h2', {
        delay: 100
    });
    sr.reveal('.naturopatia .video-container', {
        delay: 300
    });
    sr.reveal('.naturopatia .texto', {
        delay: 500
    });

    // Acompanhamento
    sr.reveal('.acompanhamento img', {
        origin: 'left'
    });
    sr.reveal('.acompanhamento .texto', {
        origin: 'right'
    });

    // Reflexologia
    sr.reveal('.reflexologia .video-container', {
        origin: 'left'
    });
    sr.reveal('.reflexologia .texto', {
        origin: 'right'
    });

    // Acupuntura
    sr.reveal('.acupuntura img', {
        origin: 'left'
    });
    sr.reveal('.acupuntura .texto', {
        origin: 'right'
    });

    // Massagem
    sr.reveal('.massagem .video-container', {
        origin: 'left'
    });
    sr.reveal('.massagem .texto', {
        origin: 'right'
    });

    // Velas
    sr.reveal('.Velas img', {
        origin: 'left'
    });
    sr.reveal('.Velas .texto', {
        origin: 'right'
    });

    // Depoimentos
    sr.reveal('.depoimentos h2');
    sr.reveal('.carousel-container', {
        delay: 300
    });

    // Receitas
    sr.reveal('.receitas h2');
    sr.reveal('.receita', {
        interval: 200 // Cada receita aparece com 200ms de intervalo
    });

    // Livro
    sr.reveal('.livro img', {
        origin: 'right'
    });
    sr.reveal('.livro .texto', {
        origin: 'left'
    });

    // Footer
    sr.reveal('footer', {
        delay: 100
    });
});

// Efeito de empilhamento na seção intro
const introBoxes = document.querySelectorAll('.textos div');
let lastScrollTop = 0;

// Configuração inicial - defina posições iniciais e estilos
function setupStackingEffect() {
    introBoxes.forEach((box, index) => {
        box.style.position = 'relative';
        box.style.transition = 'all 0.5s ease';
        box.style.zIndex = introBoxes.length - index;
        box.style.transform = 'translateY(0)'; // Posição inicial
        box.style.marginBottom = '20px'; // Espaçamento entre as divs
        box.dataset.index = index;
    });
}


// Inicializar o efeito
document.addEventListener('DOMContentLoaded', function() {
    setupStackingEffect();
    
    // abrir menu receita
    const saibaMaisButtons = document.querySelectorAll('.saiba-mais');
    
    saibaMaisButtons.forEach(button => {
        button.addEventListener('click', function() {
            const receitaCompleta = this.nextElementSibling;
            receitaCompleta.classList.toggle('active');
            
            if (receitaCompleta.classList.contains('active')) {
                this.textContent = 'Mostrar menos';
    
            } else {
                this.textContent = 'Saiba mais';
            }
        });
    });


    // menu hamburguer
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            nav.classList.add('active');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            nav.classList.remove('active');
            menuOpen = false;
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            nav.classList.remove('active');
            menuOpen = false;
        });
    });
     // Close menu when clicking outside
     document.addEventListener('click', (event) => {
        // Verifica se o clique foi fora do menu e do botão do menu
        if (menuOpen && !nav.contains(event.target) && !menuBtn.contains(event.target)) {
            menuBtn.classList.remove('open');
            nav.classList.remove('active');
            menuOpen = false;
        }
    });
});

// Mostrar ou ocultar o botão conforme o usuário rola a página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topo").style.display = "block";
  } else {
    document.getElementById("topo").style.display = "none";
  }
}

// Voltar ao topo suavemente
document.getElementById('topo').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//------ Alerta------//

// Função para mostrar o alerta
function showAlert() {
    document.getElementById('customAlert').classList.add('show');
}

// Função para fechar o alerta
function closeAlert() {
    document.getElementById('customAlert').classList.remove('show');
}

// Detecta quando o usuário chegou ao final da página
window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        showAlert();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Função para mover o carrossel
    function moveToSlide(index) {
        if (index < 0) {
            index = slides.length - 1; // Volta para o último slide se estiver no início
        } else if (index >= slides.length) {
            index = 0; // Volta para o primeiro slide se estiver no final
        }

        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    // Evento para o botão "próximo"
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    // Evento para o botão "anterior"
    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });

    // Inicializa o carrossel no primeiro slide
    moveToSlide(0);
});
