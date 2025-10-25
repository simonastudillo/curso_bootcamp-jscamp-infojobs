// Creación de componente DevJobsAvatar
class DevJobsAvatar extends HTMLElement {
   constructor(){
      super(); // Llamada al constructor de HTMLElement
      this.attachShadow({ mode: 'open' }); // Adjuntamos un Shadow DOM abierto para que no haya conflictos de estilos
   }

   createUrl(service, username) {
      return `https://unavatar.io/${service}/${username}`;
   }

   render() {
      const username = this.getAttribute('username') ?? 'midudev';
      const service = this.getAttribute('service') ?? 'github';
      const size = this.getAttribute('size') ?? '40';

      const url = this.createUrl(service, username);

      this.shadowRoot.innerHTML = `
      <style>
         img.avatar {
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
         }
      </style>
         <img
            src="${url}"
            alt="DevJobs Avatar"
            class="avatar"
         />
      `;
   }

   connectedCallback() {
      this.render();
   }
}

customElements.define('devjobs-avatar', DevJobsAvatar);