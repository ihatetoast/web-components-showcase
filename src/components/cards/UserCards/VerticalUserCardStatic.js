// dribbble ideas: https://www.chewy.com/yitahome-cat-litter-box-enclosure-oak/dp/1548222
// https://dribbble.com/shots/26424007--Profile-Cards-UI-Modern-Minimal-Designs
// https://dribbble.com/shots/5676730-Team-Section-Qonto
// https://dribbble.com/shots/9807455-Unused-contact-card-UI-concept
const template = document.createElement('template');
template.innerHTML = `
<style>
  .horizontal-card {
    background: #f4f4f4;
    display: flex;
    grid-gap: 10px;
    box-shadow: rgba(209, 205, 254, 0.5) 0px 4px 12px;
    font-family: "Merriweather", Georgia, 'Times New Roman',  serif;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  <div class="info">
    <div class="img-container"><img /></div>
    <h3></h3>
    <slot name="position" ></slot>
    <slot name="tenure"></slot>
  </div>
  <div class="about>
    <p>About</p>
    <slot name="about" ></slot>
  </div>
  <div class="contact">
      <slot name="email" ></slot>
      <slot name="mobile"></slot>
      <slot name="location"></slot>
  </div>
</div>
`;

class VerticalUserCardStatic extends HTMLElement {
  // optional rounded avatar and also optional avatar next to info vs avatar atop info
  //   static get observedAttributes() {
  //   return ['avatar-rounded', 'horizontal-info'];
  // }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  // connectedCallback() {
  //   this.updateAvatarRadius();
  // }

  // attributeChangedCallback(name, oldValue, newValue) {
  //   if (name === 'avatar-rounded') {
  //     this.updateAvatarRadius();
  //   }
  // }
// add for assigning a class name to infor for horiz layout or vertical 
// ie avatar next to bio or bio under avatar. card is still horiz, tho
  // updateAvatarRadius() {
  //   const rounded = this.getAttribute('avatar-rounded');
  //   console.log(rounded);
  //   if (rounded) {
  //     const value = Math.max(2, Math.min(10, parseInt(rounded) || 0));
  //     this.style.setProperty('--avatar-radius', `${value}px`);
  //   }
  // }
}

customElements.define('static-user-card-vertical', VerticalUserCardStatic);
