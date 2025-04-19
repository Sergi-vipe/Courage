$(document).ready(function () {

    $('.faq-heading').click(function () {
       
        var parentLi = $(this).parent('li');
        
        parentLi.toggleClass('the-active');

        parentLi.find('.faq-text').slideToggle();
    });
});

let isAnimating = false; // Variable para evitar múltiples animaciones

function toggleSection(faqheading) {
    if (isAnimating) return; // Si ya estamos animando, no hacemos nada

    isAnimating = true; // Iniciamos la animación

    // Ocultar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));

    // Esperar a que la animación termine antes de agregar la clase `active` a la nueva sección
    setTimeout(() => {
        document.getElementById(faqheading).classList.add('active');
        isAnimating = false; // Terminamos la animación
    }, 500); // El tiempo debe coincidir con la duración de la animación (500ms en este caso)
    
}