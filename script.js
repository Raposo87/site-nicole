

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