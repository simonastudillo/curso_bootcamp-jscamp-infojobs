
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

const searchInput = document.querySelector('#empleos-search-input');

searchInput?.addEventListener('input', () => {
   const searchTerm = searchInput.value.toLowerCase();
   console.log(searchTerm);
});

searchInput?.addEventListener('blur', () => {
   console.log('El input ha perdido el foco');
});

const searchForm = document.querySelector('#empleos-search-form');

searchForm?.addEventListener('submit', (event) => {
   event.preventDefault();
});

document.addEventListener('keydown', (event) => {
   console.log(`Tecla presionada: ${event.key}`);
   console.log(`Esta pulsada la tecla Control: ${event.ctrlKey}`);
   console.log(`Esta pulsada la tecla Alt: ${event.altKey}`);
   console.log(`Esta pulsada la tecla Shift: ${event.shiftKey}`);
});