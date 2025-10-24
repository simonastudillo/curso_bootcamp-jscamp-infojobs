// console.log('Antes de la llamada a fetch');
const jobsData = [];
fetch("./data.json")
   .then(response => response.json())
   .then(jobs => {
      jobsData.push(...jobs);
      buildJobsList(jobsData);
   })
   .catch(error => {
      console.error("Error al cargar el archivo JSON:", error);
   });
// console.log('Después de la llamada a fetch');

const buildJobsList = (jobs) => {
   const jobsSection = document.querySelector('.jobs-listing');
   const countJobsListing = document.getElementById('count-jobs-listing');
   countJobsListing.textContent = `Mostrando ${jobs.length} de ${jobsData.length} ofertas`;
   jobsSection.innerHTML = '';
   jobs.forEach( job => {
      const article = document.createElement('article');
      article.classList.add('job-listing-card');
      article.dataset.modalidad = job.data?.ubicacion;
      article.dataset.technology = job.data?.technology;
      article.dataset.nivel = job.data?.nivel;

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
};

const inputSearchJobs = document.getElementById('empleos-search-input');

inputSearchJobs?.addEventListener('input', () => {
   if (inputSearchJobs.value === '') {
      buildJobsList(jobsData);
      return;
   };

   const searchTerm = inputSearchJobs.value.toLowerCase();
   const filteredJobs = jobsData.filter( job => job.titulo.toLowerCase().includes(searchTerm) );
   buildJobsList(filteredJobs);
});