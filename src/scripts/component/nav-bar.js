class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
        <div class="webName">
            <h1>iqiRestoConsultant</h1>
        </div>
        <button type="button" id="menu" class="header-menu">☰ Menu </button>
    </header>
    <nav id="drawer" class="navBar">
        <ul id="appNav" class="nav-list">
        <li class="nav-item"><a href="#/home-menu">Home</a></li>
        <li class="nav-item"><a href="#/favorite">Favorite</a></li>
        <li class="nav-item"><a href="https://www.linkedin.com/in/rifqi-alamsyah-a8a832201/">About Me</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
