

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