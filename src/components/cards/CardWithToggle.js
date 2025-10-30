
const template = document.createElement('template');
template.innerHTML = `
<style>
  .horizontal-card{
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    border-bottom: darkorchid 5px solid;
    padding-bottom: 10px;
  }
  .horizontal-card img{
    width: 100%;
  }
    .horizontal-card button{
    cursor: pointer;
    background: darkorchid;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
    }
</style>
<div class="horizontal-card">
  <img />
  <div>
    <h3></h3>
    <div class="info">
      <p><slot name="email" ></slot></p>
      <p><slot name="mobile"></slot></p>
    </div>
    <button id="toggle-info">Hide info</button>
  </div>
</div>
`;

class CardWithToggle extends HTMLElement {
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


  // methods
  toggleInfo() {
    console.log("I've toggled.");
    this.showInfo = !this.showInfo;

    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');
    const info = this.shadowRoot.querySelector('.info');
    
    toggleBtn.innerText = this.showInfo ? 'Hide Info' : 'Show Info';
    info.style.display = this.showInfo ? 'block' : 'none';
  }


  // lifecycle methods
  connectedCallback() {
    this.shadowRoot
      .querySelector('#toggle-info')
      .addEventListener('click', () => this.toggleInfo());
  }
  disconnectedCallback() {
    this.shadowRoot
      .querySelector('#toggle-info')
      .removeEventListener();
  }
}

customElements.define('expandable-card', CardWithToggle);
