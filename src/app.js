import { LitElement, html } from "lit";
import "../components/my-list.js";

class MyApp extends LitElement {
  _handleClick(e) {
    console.log(
      "You just clicked a button with key:",
      e.target.getAttribute("key"),
      "and text:",
      e.target.textContent
    );
  }

  render() {
    return html`
      <my-list @click="${this._handleClick}">
        <button key="3" slot="3">My third item</button>
        <button key="2" slot="2">My second item</button>
        <button key="1" slot="1">My first item</button>
      </my-list>
    `;
  }
}

customElements.define("my-app", MyApp);
