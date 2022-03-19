import { html } from 'lit-html';

import Button from './Button';
import Title from './Title';

const App = () => {
  const name = 'John Doe';
  return html`${Title({ name })} ${Button({ name })}`;
};

export default App;
