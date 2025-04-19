document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  

    if (!email || !password) {
      document.getElementById('errorMessage').textContent = 'Por favor, completa todos los campos.';
    } else if (!validateEmail(email)) {
      document.getElementById('errorMessage').textContent = 'Por favor, ingresa un correo electrónico válido.';
    } else {
      document.getElementById('errorMessage').textContent = '';
      alert('Iniciando sesión...');
    }
  });
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  