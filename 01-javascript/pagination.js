import {generatePageNumbers, currentPage, RESULTS_PER_PAGE, setCurrentPage} from './fetch-data.js';

const paginationContainer = document.querySelector('.pagination');

paginationContainer?.addEventListener('click', (event) => {
   event.preventDefault();
   const jobs = document.querySelectorAll('.job-listing-card');
   const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE);

   const element = event.target;
   if ( element.closest('#prev-page-button') && currentPage > 1 ) {
      setCurrentPage(currentPage - 1);
      generatePageNumbers(jobs.length);
      return;
   }

   if ( element.closest('#next-page-button') && currentPage < totalPages ) {
      setCurrentPage(currentPage + 1);
      generatePageNumbers(jobs.length);
      return;
   }

   if ( element.classList.contains('page-button') ) {
      const page = Number(element.dataset.page);
      setCurrentPage(page);
      generatePageNumbers(jobs.length);
      return;
   }

});