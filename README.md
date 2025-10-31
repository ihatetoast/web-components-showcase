
# Web components

## What? 

A test page to practice web components, both serious and ones to amuse me. I need to be amused. 

## Why?

First of all, lern gud stuph. In a world of React, Vue, Golly Darn DAngular, doing a little web component play is fun. Also, doing a showcase page gives me little mini projects between longer ones. A soupçon of code. Sorbet between meals. A bit of derring do to do something new. 

## How?

- Vite with vanilla JS template. 
- CSS/SCSS 
- Dummy data until I find an API to amuse me. Did I mention that I need to be amused?


## When? 

- When the mood hits
- While watching telly or listening to podcasts
- Ongoing and shouldn't ever be done.

---

## Main building blocks

There are three main building blocks: 
- Custom Elements
- Shadow DOM
- HTML Templates

## Custom Elements

- Allow us to create custom HTML tags
Create a custom class (Class, not CSS) that extends HTMLElement
ex: 

- create the class:
  class AppDrawer extends HTMLELement {...}


- Bind title (what we are calling it) to the class:
  window.customElement.define('app-drawer', AppDrawer);


### The lifecycle methods:

- constructor(): Called when an instance of hte element is created. usual OOP
- connectedCallback(): Called every time the element is inserted into the DOM
- disconnectedCallback(): Called every time the element is removed from the DOM
- attributeChangedCallback(attributeName, oldValue, newValue): called when an atribute is added, removed, updated, or replaced.

## The Shadow DOM

- Used for self-contained components
- Encapsulates styles and markup
- Create with element.attachShadow({mode: open})
- Creates a "shadowRoot" that we can reference and interact with

ex in the constructor,

  this.attachShadow({mode: open})

This would prevent a line like this: 

  this.innerHTML = `<style>h3 {color: chartreuse}</style><h3>${this.getAttribute('name')}</h3>`;

affecting other h3s not in a component.

then add this: 
  this.shadowRoot.appendChild(template.content.cloneNode(true));

## HTML Templates

- Defines the encapsulated markup of our web component
- Template tag stores mark up on page
- Include both HTML and CSS in templates
- Use slots to add custom text


## Ideas to make:

### Generics
- [ ] Cards (user, vertical, offset, custom to my own amusement...)
- - [x] Horizontal static
- - [ ] Vertical static --  KATY, YOU ARE HERE!
- - [ ] Offset
- - [ ] Horizontal dynamic
- - [ ] Vertical dynamic
- [ ] Card containers for dynamic cards

### Basic Interactive Elements:

- [ ] Buttons (custom) with loading states, icon support, or themes
- [ ] Toggle switches
- [ ] Tooltips
- [ ] Badges/pills
- [ ] Progress bars or spinners
- [ ] Avatars with fallback initials

### Input Components:

- [ ] Custom checkboxes or radio buttons with better styling
- [ ] Range sliders with custom styling
- [ ] Date pickers
- [ ] Search bars with autocomplete
- [ ] Star ratings
- [ ] Tag inputs (where you can add/remove tags)

### Display Components:

- [ ] Accordion/collapsible sections
- [ ] Tabs
- [ ] Modal dialogs
- [ ] Toast notifications
- [ ] Breadcrumbs
- [ ] Pagination controls

### More Complex Components:

- [ ] Dropdown menus
- [ ] Carousels/sliders
- [ ] Data tables with sorting
- [ ] File upload with preview
- [ ] Color pickers

### Components That Exist Solely for My Amusement:
- [ ] Dog cards
- [ ] Cat cards

notes on toast:
"Message sent successfully!" 
"Item added to cart"
"Error: Could not save changes"
"Copied to clipboard"

Non-blocking (don't interrupt what the user is doing)
Auto-dismiss after 3-5 seconds
Should be stackable (multiple toasts can appear) ... usually
Animated:  slide in from the side or fade in 