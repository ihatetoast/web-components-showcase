import alienImg from '../../../assets/alien-294250_640.png';
const template = document.createElement('template');
template.innerHTML = `
<style>
  /* RESETS */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  li {
    list-style: none;
  }

    /* COMPONENT */
    /* card */
  .horizontal-card {
    background: #f4f4f4;
    border-radius: 20px;
    color: #1D0C1C;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    box-shadow: rgba(58, 24, 55, 0.3) 0px 4px 7px;
    font-family: "Merriweather", Georgia, 'Times New Roman',  serif;
    padding: 2rem 1rem;
    max-width: 375px;
  }
  
  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  :host([horizontal-header]) .info {
    flex-direction: row;
    gap: 1rem;
  }

  .img-container {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
  }

  .img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .info h3 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Montserrat",Arial, Helvetica, sans-serif;
    margin-bottom: .5rem;
  }

  .position, .tenure {
  font-size: 0.9rem;
  margin-bottom: 4px;
  }

  .tenure {
  color: #3e1a3d;
  font-family: "Montserrat",Arial, Helvetica, sans-serif;
  }

    /* about / bio */
    
  ::slotted(p:first-of-type) {
    color: red;
   margin-bottom: 8px;
  }

  ::slotted(p:not(:first-of-type)) {
    color: blue;
    margin-bottom: 8px;
  }


</style>

<div class="horizontal-card">
  <div class="info">
    <div class="img-container">
      <img alt="Profile picture"/>
    </div>
    <div class="pers-info">
      <h3></h3>
      <div class="position"><p><span class="position-val"> </span></p></div>
      <div class="tenure"><p><span class="tenure-val"> </span><span class="years"></span></p></div>
    </div>
  </div>

  <div class="about">
    <p class="about-title"><span class="about-emoji">💼</span>About</p>
    <slot name="about" >
      <p class="no-info">No bio provided</p>
    </slot>
  </div>

  <div class="contact">
  <ul class="contact-items">
    <li class="contact-item email-item">
      <div><span class="contact-item-emoji">📬</span><span class="item-label"> email:</span> <span class="item-value email">email:</span></div>
    </li>
    <li class="contact-item mobile-item">
      <div><span class="contact-item-emoji">📱</span><span class="item-label">mobile:</span> <span class="item-value mobile">mobile:</span></div>
    </li>
    <li class="contact-item location-item">
      <div><span class="contact-item-emoji">📍</span><span class="item-label">location:</span> <span class="item-value location">location:</span></div>
    </li>
  </ul>
    
  </div>
</div>
`;

class VerticalUserCardStatic extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').textContent =
      this.getAttribute('name') || 'Employee on smoko';
    this.shadowRoot.querySelector('img').src =
      this.getAttribute('avatar') || alienImg;

    const position = this.getAttribute('position');

    const tenure = this.getAttribute('tenure');
    const tenureYears = +tenure;

    if (!tenure || isNaN(tenureYears)) {
      // if someone writes more than a number for tenure ("3 years" or "two")
      this.shadowRoot.querySelector('.tenure').style.display = 'none';
    } else {
      this.shadowRoot.querySelector('.tenure-val').textContent = tenure;
      this.shadowRoot.querySelector('.years').textContent =
        tenureYears === 1 ? ' year experience' : " years' experience";
    }

    if (position) {
      this.shadowRoot.querySelector('.position-val').textContent = position;
    } else {
      this.shadowRoot.querySelector('.position').style.display = 'none';
    }

    // list items for contact info
    const email = this.getAttribute('email');
    const mobile = this.getAttribute('mobile');
    const location = this.getAttribute('location');

    // hide email-item (list item) if no email (email-value) (vs || '')
    if (email) {
      this.shadowRoot.querySelector('.email').textContent = email;
    } else {
      this.shadowRoot.querySelector('.email-item').style.display = 'none';
    }
    if (mobile) {
      this.shadowRoot.querySelector('.mobile').textContent = mobile;
    } else {
      this.shadowRoot.querySelector('.mobile-item').style.display = 'none';
    }
    if (location) {
      this.shadowRoot.querySelector('.location').textContent = location;
    } else {
      this.shadowRoot.querySelector('.location-item').style.display = 'none';
    }
  }




}

customElements.define('static-user-card-vertical', VerticalUserCardStatic);