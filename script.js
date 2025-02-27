document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.textos .card');
    let currentIndex = 0;

    function checkScroll() {
        const scrollPosition = window.scrollY;
        const sectionTop = document.querySelector('.intro').offsetTop;
        const sectionHeight = document.querySelector('.intro').offsetHeight;

        // Verifica se o scroll está dentro da seção .intro
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const scrollProgress = (scrollPosition - sectionTop) / sectionHeight;

            // Ativa a próxima card com base no progresso do scroll
            const targetIndex = Math.floor(scrollProgress * cards.length);
            if (targetIndex !== currentIndex) {
                cards[currentIndex].classList.remove('active');
                cards[currentIndex].classList.add('stacked');
                currentIndex = targetIndex;
                cards[currentIndex].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica o scroll ao carregar a página
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

// Aplicar o efeito de empilhamento com base na direção do scroll
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const introSection = document.querySelector('.intro');
    const introRect = introSection.getBoundingClientRect();
    
    // Verifique se a seção está visível na tela
    if (introRect.top < window.innerHeight && introRect.bottom > 0) {
        // Determine a direção da rolagem
        const scrollingUp = scrollTop < lastScrollTop;
        
        if (scrollingUp) {
            // Scrolling UP - ativar efeito de empilhamento
            // As caixas se movem para cima e se sobrepõem
            introBoxes.forEach((box, index) => {
                // Quanto maior o índice, menor o deslocamento para cima
                const offset = -index * 40; // Valor negativo para mover para cima
                box.style.transform = `translateY(${offset}px)`;
                box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                box.classList.add('stacked');
            });
        } else {
            // Scrolling DOWN - retornar à posição normal
            introBoxes.forEach(box => {
                box.style.transform = 'translateY(0)';
                box.style.boxShadow = 'none';
                box.classList.remove('stacked');
            });
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Inicializar o efeito
document.addEventListener('DOMContentLoaded', function() {
    setupStackingEffect();
    
    // Resto do código existente
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