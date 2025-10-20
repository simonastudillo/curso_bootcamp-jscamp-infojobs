// Creación de componente DevJobsAvatar
class DevJobsAvatar extends HTMLElement {
   constructor(){
      super(); // Llamada al constructor de HTMLElement
      this.attachShadow({ mode: 'open' }); // Adjuntamos un Shadow DOM abierto para que no haya conflictos de estilos
   }

   render() {
      this.shadowRoot.innerHTML = `
      <style>
         img.avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
         }
      </style>
         <img
            src="https://avatars.githubusercontent.com/u/1561955"
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