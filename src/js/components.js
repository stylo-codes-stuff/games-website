import {LitElement, html} from 'lit-element';
import {navbarStyle} from "./lit-styles.js";
class navbarDropdown extends LitElement{
  static get properties(){
    return{
      name:{type:String},
    };
  }
  constructor(){
    super();
    this.name = "";
  }
  
  static get styles(){
    return [navbarStyle];
  }
  render(){
    return html `
    <ul>
      <li class="dropdown">${this.name}
      <ul class="dropdown-content">
      <slot></slot>
      </li>
    </ul>
    `;
  }
}
class dropdownOption extends LitElement{
  static get properties(){
    return{
      item:{type:String},

    };
  }
  static get styles(){
    return [navbarStyle];
  }
    render(){
      return html`
      <li><slot></slot><li>
      `;
    }
  }
class photoFrame extends LitElement{
  static get styles(){
    
  }
}

customElements.define("navbar-dropdown", navbarDropdown);
customElements.define("dropdown-option", dropdownOption)