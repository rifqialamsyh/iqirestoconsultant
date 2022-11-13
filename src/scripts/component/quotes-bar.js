class Quotes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="quote">
        <p><q>The Best</q> <br> Consultant
         for Your Restaurant </p>
    </div>
      `;
  }
}

customElements.define('quote-bar', Quotes);
