class AppBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `<p>Tebak Pacar</p>`;
	}
}

customElements.define('app-bar', AppBar);
