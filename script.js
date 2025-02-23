document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all "Saiba mais" buttons
    const saibaMaisButtons = document.querySelectorAll('.saiba-mais');
    
    saibaMaisButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest recipe card and its complete recipe content
            const receitaCompleta = this.nextElementSibling;
            
            // Toggle the 'active' class
            receitaCompleta.classList.toggle('active');
            
            // Change button text based on state
            if (receitaCompleta.classList.contains('active')) {
                this.textContent = 'Mostrar menos';
            } else {
                this.textContent = 'Saiba mais';
            }
        });
    });
});


// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
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