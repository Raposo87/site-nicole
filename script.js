

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

// carrossel
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do carrossel de depoimentos
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    let currentIndex = 0;
    const slideWidth = 100; // 100% da largura do contêiner
    
    // Função para mover o carrossel
    function moveToSlide(index) {
        // Atualiza a posição do carrossel
        track.style.transform = `translateX(-${index * slideWidth}%)`;
        currentIndex = index;
    }
    
    // Função para avançar para o próximo slide
    function moveNext() {
        // Se estiver no último slide, volta para o primeiro
        if (currentIndex === slides.length - 1) {
            // Adiciona uma pequena transição suave
            track.style.transition = 'none';
            moveToSlide(0);
            // Força um reflow/repaint para que a transição seja aplicada
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
            }, 10);
        } else {
            // Avança para o próximo slide
            moveToSlide(currentIndex + 1);
        }
    }
    
    // Iniciar o carrossel automático
    let carouselInterval = setInterval(moveNext, 5000); // Muda a cada 5 segundos
    
    // Pausar o carrossel quando o mouse estiver sobre ele
    const carouselContainer = document.querySelector('.carousel-container');
    
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(moveNext, 5000);
    });
    
    // Verifica se a seção está visível antes de iniciar o carrossel
    function checkVisibility() {
        const depoimentos = document.querySelector('.depoimentos');
        const rect = depoimentos.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
        
        if (isVisible) {
            // Reinicia o carrossel se estiver visível
            clearInterval(carouselInterval);
            carouselInterval = setInterval(moveNext, 5000);
        }
    }
    
    // Verifica a visibilidade ao rolar a página
    window.addEventListener('scroll', checkVisibility);
    
    // Inicia o carrossel
    checkVisibility();
});