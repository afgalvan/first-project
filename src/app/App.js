import './App.scss';

import { html } from 'lit-html';

import Button from './components/Button';
import Title from './components/Title';

const App = () => {
  const name = 'John Doe';
  return html`${Title({ name })} ${Button({ name })}`;
};

export default App;
