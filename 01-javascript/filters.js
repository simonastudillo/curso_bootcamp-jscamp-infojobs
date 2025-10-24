const formEmpleo = document.querySelector('#empleos-search-form');

formEmpleo?.addEventListener('input', (event) => {
   const jobs = document.querySelectorAll('.job-listing-card');
   const countJobsListing = document.getElementById('count-jobs-listing');
   let countVisibleJobs = 0;

   // Filters
   const inputSearchJobs = document.getElementById('empleos-search-input').value.toLowerCase();
   const filterLocation = document.querySelector('#filter-location').value.toLowerCase();
   const filterTecnologia = document.querySelector('#filter-technology');
   const selectedTecnologia = Array.from(filterTecnologia.selectedOptions).map(option => option.value);
   const filterExperiencia = document.querySelector('#filter-experience-level').value.toLowerCase();

   jobs.forEach( job => {
      const jobTitle = job.dataset.title.toLowerCase();
      const jobModalidad = job.dataset.modalidad.toLowerCase();
      const jobTecnologia = job.dataset.technology.toLowerCase();
      const jobNivel = job.dataset.nivel.toLowerCase();
      const tieneAlgunaTech = selectedTecnologia.some((tech) => jobTecnologia.includes(tech.toLowerCase()));
      
      const isShown = 
         (inputSearchJobs === '' || jobTitle.includes(inputSearchJobs))
         && (filterLocation === '' || jobModalidad === filterLocation)
         && (filterTecnologia === '' || tieneAlgunaTech)
         && (filterExperiencia === '' || jobNivel === filterExperiencia);

      job.classList.toggle('is-hidden', !isShown);
      if (isShown) countVisibleJobs++;
   });
   countJobsListing.textContent = `Mostrando ${countVisibleJobs} de ${jobs.length} ofertas`;
});




// const filterLocation = document.querySelector('#filter-location');
// const filterTecnologia = document.querySelector('#filter-technology');
// const mensaje = document.querySelector('#filter-selected-value');

// filterLocation?.addEventListener('change', () => {
//    const selectedValue = filterLocation.value;
//    const jobs = document.querySelectorAll('.job-listing-card');

//    if  ( selectedValue ) {
//       mensaje.textContent = `Filtrando por tecnología: ${selectedValue}`;
//    } else {
//       mensaje.textContent = '';
//    }

//    jobs.forEach( job => {
//       const jobModalidad = job.dataset.modalidad;
//       const jobTecnologia = job.dataset.technology;
//       const isShown = selectedValue === '' || jobModalidad === selectedValue;
//       // const jobModalidad = job.getAttribute('data-modalidad');
//       job.classList.toggle('is-hidden', !isShown);

//       // if ( selectedValue === '' || jobModalidad === selectedValue ) {
//       //    job.classList.remove('is-hidden');
//       // } else {
//       //    job.classList.add('is-hidden');
//       // }

//    });
// });

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