const template = document.createElement('template');

// revisit for styling now that global p off. 

template.innerHTML = `
<style>
  .horizontal-card {
    background: #f4f4f4;
    width: 450px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    box-shadow: rgba(209, 205, 254, 0.5) 0px 4px 12px;
    padding: 16px 24px;
    font-family: "Merriweather", Georgia, 'Times New Roman',  serif;
  }

  .horizontal-card h3 {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .horizontal-card img{
    width: 100%;
    margin: auto;
  }

  :host([circle-avatar]) img,
    :host([square-avatar]) img {
      width: 100px;
      height: 100px;
    }

  :host([circle-avatar]) img {
    border-radius: 50%;
  }
  :host([rounded-avatar]) img {
    border-radius: 5px;
  }
  
  :host([avatar-rounded]) img {
    border-radius: var(--avatar-radius, 0);
  }
  

  .info ::slotted([slot="email"])::before {
    content: "📧 ";
  }
  
  .info ::slotted([slot="mobile"])::before {
    content: "📱 ";
  }

   .img-container {
  width: 150px;
    height: 150px;
    overflow: hidden;
  }
    .img-container img {
    object-fit: cover;}
</style>

<div class="horizontal-card">
  <div class="img-container"><img /></div>
  <div>
    <h3></h3>
    <div class="info">
      <slot name="email" ></slot>
      <slot name="mobile"></slot>
      <slot name="description"></slot>
    </div>
  </div>
</div>
`;

class HorizontalUserCardStatic extends HTMLElement {

  constructor() {
    super();
    // create shadow DOM
    this.attachShadow({ mode: 'open' });
    // append child to shadow root. append the template.
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // handle attributes
    this.shadowRoot.querySelector('h3').textContent = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  connectedCallback() {
    // get attr value on load
    this.updateAvatarRadius();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'avatar-rounded') {
      this.updateAvatarRadius();
    }
  }

  updateAvatarRadius() {
    const rounded = this.getAttribute('avatar-rounded');
    if (rounded) {
      // keep value between 2 and 10. If user gives a value greater than 10, it'll be 10.
      const value = Math.max(2, Math.min(10, parseInt(rounded) || 0));
      this.style.setProperty('--avatar-radius', `${value}px`);
    }
  }
}

customElements.define('static-user-card-horizontal', HorizontalUserCardStatic);
