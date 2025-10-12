
// const boton = document.querySelector('.button-apply-job');

// if ( boton !== null) {
   // boton.addEventListener('click', () => {
   //    boton.textContent = '¡Aplicado!';
   //    boton.classList.add('is-applied');
   //    boton.disabled = true;
   // });
// }


const botones = document.querySelectorAll('.button-apply-job');

botones.forEach( boton => {

   boton.addEventListener('click', () => {
      boton.textContent = '¡Aplicado!';
      boton.classList.add('is-applied');
      boton.disabled = true;
   });

});