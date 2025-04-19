// Espera a que todas las imágenes se hayan cargado antes de hacer scroll
function imagesLoaded() {
    return new Promise((resolve, reject) => {
        const images = document.querySelectorAll('img');
        let loadedCount = 0;

        images.forEach((img) => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.onload = img.onerror = () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        resolve();
                    }
                };
            }
        });

        if (loadedCount === images.length) {
            resolve(); // Si ya estaban todas cargadas
        }
    });
}

// Función para cargar la sección guardada cuando todo esté listo
function loadSectionWhenReady() {
    imagesLoaded().then(() => {
        loadSavedSection(); // Después de que todas las imágenes se hayan cargado
    });
}

window.onload = function () {
    loadSectionWhenReady(); // Esperamos a que todo esté listo antes de cargar la sección guardada
};
