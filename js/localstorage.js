// Array con los IDs de tus secciones. 
// Este array será útil para verificar en qué sección estás.
const sections = ['#pagina1', '#pagina2', '#pagina3', '#pagina4', '#pagina5', '#pagina6', '#pagina7', '#pagina8']; 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (sections.includes(target)) {
            localStorage.setItem('currentSection', target);
            console.log('Guardado por click:', target);
        }
    });
});



// Función para esperar a que todo el contenido y los scripts estén completamente cargados
function waitForCompleteLoad() {
    setTimeout(() => {
        loadSavedSection();
    }, 100); 
}



function loadSavedSection() {
    const savedSection = localStorage.getItem('currentSection');
    console.log('Sección guardada desde localStorage:', savedSection);
    if (savedSection) {
        document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
        const section = document.querySelector(savedSection);
        if (section) {
            section.classList.add('active');
            section.scrollIntoView({ behavior: 'auto', block: 'start' });
        } else {
            console.warn('Sección no encontrada:', savedSection);
        }
    }
}

// Usamos window.onload para asegurarnos de que todos los recursos estén completamente cargados
window.onload = function () {
    waitForCompleteLoad(); // Esperamos hasta que las secciones estén listas antes de hacer scroll
};
