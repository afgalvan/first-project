import { html } from 'lit-html';

import { Component } from './Component';

class App extends Component {
  constructor() {
    super('#root');
  }

  init = () => {
    this.render(html`<h1>Index</h1>`);
  };
}

export default new App();
