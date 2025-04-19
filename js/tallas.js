const botones = document.querySelectorAll('.talla');

botones.forEach(boton => {
  boton.addEventListener('click', function() {
    
    botones.forEach(b => b.classList.remove('selected'));
  
    this.classList.add('selected');
  });
});
