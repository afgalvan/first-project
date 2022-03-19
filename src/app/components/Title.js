import './Title.scss';

import { html } from 'lit-html';

const Title = ({ name }) => {
  return html`<h1 class="title">Hi ${name}</h1>`;
};

export default Title;
