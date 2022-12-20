import { LitElement, html } from "lit";

export class MyList extends LitElement {
  render() {
    return html`
      <div>
        <slot name="1"></slot>
        <slot name="2"></slot>
        <slot name="3"></slot>
      </div>
    `;
  }
}

customElements.define("my-list", MyList);
