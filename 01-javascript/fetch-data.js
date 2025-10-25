// console.log('Antes de la llamada a fetch');
export const RESULTS_PER_PAGE = 3;
export let currentPage = 1;

fetch("./data.json")
   .then(response => response.json())
   .then(jobs => {
      const jobsSection = document.querySelector('.jobs-listing');
      const countJobsListing = document.getElementById('count-jobs-listing');
      countJobsListing.textContent = `Mostrando ${jobs.length} de ${jobs.length} ofertas`;

      generatePageNumbers(jobs.length);

      jobsSection.innerHTML = '';
      jobs.forEach( job => {
         const article = document.createElement('article');
         article.classList.add('job-listing-card');
         article.dataset.modalidad = job.data?.modalidad;
         article.dataset.technology = job.data?.technology.toString();
         article.dataset.nivel = job.data?.nivel;
         article.dataset.title = job.titulo.toLowerCase();

         article.innerHTML = `
            <div>
               <h3>${job.titulo}</h3>
               <small>${job.empresa} | ${job.ubicacion}</small>
               <p>${job.descripcion}</p>
            </div>
            <button class="button-apply-job">Aplicar</button>
         `;
         jobsSection.appendChild(article);
      });
   })
   .catch(error => {
      console.error("Error al cargar el archivo JSON:", error);
   });
// console.log('Después de la llamada a fetch');


export const generatePageNumbers = (totalResults) => {
   const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);
   const paginationContainer = document.querySelector('.pagination')

   // Limpiar la paginación existente
   paginationContainer.innerHTML = `
   <a href="#" class="${ currentPage === 1 ? 'is-disabled' : '' }" id="prev-page-button">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
         <path d="M15 6l-6 6l6 6" />
      </svg>
   </a>`;

   // Crear un botón por cada página
   for (let i = 1; i <= totalPages; i++) {
      const anchor = document.createElement('a')
      anchor.textContent = i
      anchor.className = 'page-button'
      anchor.href = '#'
      anchor.dataset.page = i;

      // Si es la página actual, añadir clase activa
      if (i === currentPage) {
         anchor.classList.add('is-active')
      }

      paginationContainer.appendChild(anchor)
   }
   const anchor = document.createElement('a');
   anchor.href = '#';
   anchor.className = `${ currentPage === totalPages ? 'is-disabled' : '' }`;
   anchor.id = 'next-page-button';
   anchor.innerHTML = `
   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l6 6l-6 6" />
    </svg>`;
   paginationContainer.appendChild(anchor)
}

export const setCurrentPage = (page) => {
   currentPage = page;
}