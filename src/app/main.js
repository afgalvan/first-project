import './main.scss';

import { render } from 'lib/utils';

import App from './components/App';

const main = () => render(App, document.getElementById('root'));

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
