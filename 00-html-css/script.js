
// const boton = document.querySelector('.button-apply-job');

// if ( boton !== null) {
   // boton.addEventListener('click', () => {
   //    boton.textContent = '¡Aplicado!';
   //    boton.classList.add('is-applied');
   //    boton.disabled = true;
   // });
// }

// const botones = document.querySelectorAll('.button-apply-job');

// botones.forEach( boton => {

//    boton.addEventListener('click', () => {
//       boton.textContent = '¡Aplicado!';
//       boton.classList.add('is-applied');
//       boton.disabled = true;
//    });

// });

// Delegación de eventos
const jobsListingSection = document.querySelector('.jobs-listing');

jobsListingSection?.addEventListener('click', (event) => {
   const element = event.target;

   if ( element.classList.contains('button-apply-job') ) {
      element.textContent = '¡Aplicado!';
      element.classList.add('is-applied');
      element.disabled = true;
   }
});

const filter = document.querySelector('#filter-technology');
const mensaje = document.querySelector('#filter-selected-value');

filter?.addEventListener('change', () => {
   const selectedValue = filter.value;

   if  ( selectedValue ) {
      mensaje.textContent = `Filtrando por tecnología: ${selectedValue}`;
   } else {
      mensaje.textContent = '';
   }
});