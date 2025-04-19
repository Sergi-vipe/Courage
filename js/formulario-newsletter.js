
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let valid = true;

    document.getElementById('errorCorreo').style.display = 'none';

    let correo = document.getElementById('correo').value;
    if (correo === '') {
        document.getElementById('errorCorreo').style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('¡Suscripción a la Newsletter de Courage realizada con éxito!');
    }
});

