import { toggleVision } from 'lib/utils';
import { html } from 'lit-html';

const Button = ({ name }) => {
  const onClick = () => toggleVision('.subtitle', ['none', 'block']);

  return html`<button @click=${() => onClick()} class="button">
      Click this, ${name}
    </button>
    <h2 class="subtitle">Subtitle</h2>`;
};

export default Button;
