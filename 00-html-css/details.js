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