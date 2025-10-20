// console.log('Antes de la llamada a fetch');
fetch("./data.json")
   .then(response => response.json())
   .then(jobs => {
      const jobsSection = document.querySelector('.jobs-listing');
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
   })
   .catch(error => {
      console.error("Error al cargar el archivo JSON:", error);
   });
// console.log('Después de la llamada a fetch');