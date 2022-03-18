import { render as renderContent } from 'lit-html';

export class Component {
  constructor(querySelector) {
    this.container = document.querySelector(querySelector);
  }

  render = (html) => {
    renderContent(html, this.container);
  };
}
