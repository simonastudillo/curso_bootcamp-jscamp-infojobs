const filter = document.querySelector('#filter-location');
const mensaje = document.querySelector('#filter-selected-value');

filter?.addEventListener('change', () => {
   const selectedValue = filter.value;
   const jobs = document.querySelectorAll('.job-listing-card');

   if  ( selectedValue ) {
      mensaje.textContent = `Filtrando por tecnología: ${selectedValue}`;
   } else {
      mensaje.textContent = '';
   }

   jobs.forEach( job => {
      const jobModalidad = job.dataset.modalidad;
      const isShown = selectedValue === '' || jobModalidad === selectedValue;
      // const jobModalidad = job.getAttribute('data-modalidad');
      job.classList.toggle('is-hidden', !isShown);

      // if ( selectedValue === '' || jobModalidad === selectedValue ) {
      //    job.classList.remove('is-hidden');
      // } else {
      //    job.classList.add('is-hidden');
      // }

   });
});

// const filter = document.querySelector('#filter-technology');
// const mensaje = document.querySelector('#filter-selected-value');

// filter?.addEventListener('change', () => {
//    const selectedValue = filter.value;

//    if  ( selectedValue ) {
//       mensaje.textContent = `Filtrando por tecnología: ${selectedValue}`;
//    } else {
//       mensaje.textContent = '';
//    }
// });

// const searchInput = document.querySelector('#empleos-search-input');

// searchInput?.addEventListener('input', () => {
//    const searchTerm = searchInput.value.toLowerCase();
//    console.log(searchTerm);
// });

// searchInput?.addEventListener('blur', () => {
//    console.log('El input ha perdido el foco');
// });

// const searchForm = document.querySelector('#empleos-search-form');

// searchForm?.addEventListener('submit', (event) => {
//    event.preventDefault();
// });

// document.addEventListener('keydown', (event) => {
//    console.log(`Tecla presionada: ${event.key}`);
//    console.log(`Esta pulsada la tecla Control: ${event.ctrlKey}`);
//    console.log(`Esta pulsada la tecla Alt: ${event.altKey}`);
//    console.log(`Esta pulsada la tecla Shift: ${event.shiftKey}`);
// });