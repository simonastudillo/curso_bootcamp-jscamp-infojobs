
const inputSearchJobs = document.getElementById('empleos-search-input');

inputSearchJobs?.addEventListener('input', () => {
   const countJobsListing = document.getElementById('count-jobs-listing');
   const jobs = document.querySelectorAll('.job-listing-card');
   let countVisibleJobs = 0;

   jobs.forEach( job => {
      const jobTitle = job.dataset.title;
      const isShown = inputSearchJobs.value === '' || jobTitle.includes(inputSearchJobs.value.toLowerCase());
      job.classList.toggle('is-hidden', !isShown);
      if (isShown) countVisibleJobs++;
   });
   countJobsListing.textContent = `Mostrando ${countVisibleJobs} de ${jobs.length} ofertas`;
});