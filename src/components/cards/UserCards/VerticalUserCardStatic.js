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
    <div class="img-container">
      <img alt="Profile picture"/>
    </div>
    <h3></h3>
    <div class="position" ></div>
    <div class="tenure"></div>
  </div>

  <div class="about">
    <p>About</p>
    <slot name="about" >
      <p class="no-info">No bio provided</p>
    </slot>
  </div>

  <div class="contact">
  <ul class="contact-items">
    <li class="contact-item email-item">
      <div><span class="item-label">email:</span> <span class="item-value email">email:</span></div>
    </li>
    <li class="contact-item mobile-item">
      <div><span class="item-label">mobile:</span> <span class="item-value mobile">mobile:</span></div>
    </li>
    <li class="contact-item location-item">
      <div><span class="item-label">location:</span> <span class="item-value location">location:</span></div>
    </li>
  </ul>
    
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
    this.shadowRoot.querySelector('h3').textContent = this.getAttribute('name') || 'Employee on smoko';
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar') || '../../../assets/icon-7797704_640.png';
    this.shadowRoot.querySelector('.position').textContent = this.getAttribute('position') || '';

    // list items for contact info
    const email = this.getAttribute('email');
    const mobile = this.getAttribute('mobile');
    const location = this.getAttribute('location');

    // hide email-item (list item) if no email (email-value) (vs || '') 
    if(email) {
      this.shadowRoot.querySelector('.email').textContent = email;
    } else {
      this.shadowRoot.querySelector('.email-item').style.display = 'none';
    }
    if(mobile) {
      this.shadowRoot.querySelector('.mobile').textContent = mobile;
    } else {
      this.shadowRoot.querySelector('.mobile-item').style.display = 'none';
    }
    if(location) {
      this.shadowRoot.querySelector('.location').textContent = location;
    } else {
      this.shadowRoot.querySelector('.location-item').style.display = 'none';
    }
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
