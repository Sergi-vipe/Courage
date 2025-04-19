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
    const defaultSection = '#pagina1'; // Cambia este ID si quieres otra sección por defecto

    // Elegimos qué sección mostrar
    const sectionToShow = savedSection && document.querySelector(savedSection)
        ? savedSection
        : defaultSection;

    console.log('Sección que se intentará mostrar:', sectionToShow);

    // Removemos clase "active" de todas las secciones
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));

    const section = document.querySelector(sectionToShow);
    if (section) {
        section.classList.add('active');
        section.scrollIntoView({ behavior: 'auto', block: 'start' });

        // Si no había sección guardada, la guardamos ahora
        if (!savedSection) {
            localStorage.setItem('currentSection', sectionToShow);
            console.log('Guardado por defecto:', sectionToShow);
        } else {
            console.log('Sección cargada desde localStorage:', savedSection);
        }
    } else {
        console.warn('⚠️ No se encontró la sección:', sectionToShow);
    }
}


// Usamos window.onload para asegurarnos de que todos los recursos estén completamente cargados
window.onload = function () {
    waitForCompleteLoad(); // Esperamos hasta que las secciones estén listas antes de hacer scroll
};
