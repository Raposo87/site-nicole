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