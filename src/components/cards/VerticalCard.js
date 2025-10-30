const template = document.createElement('template');
template.innerHTML = `
<style>
  .vertical-card{
    
  }
  .vertical-card img{
   
  }

</style>
<div class="vertical-card">
  <img />
  <div>
    <h3></h3>
    <div class="info">
      <p><slot name="email" ></slot></p>
      <p><slot name="mobile"></slot></p>
    </div>
  </div>
</div>
`;

class VerticalCard extends HTMLElement {
  constructor() {
    super();

    // set properties
    this.showInfo = true;

    // create shadow DOM
    this.attachShadow({ mode: 'open' });
    // append child to shadow root. append the template.
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // handle attributes
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

}

customElements.define('horizontal-card', VerticalCard);
