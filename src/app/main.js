import { render } from 'lib/utils';

import App from './App';

const main = () => render(App, document.getElementById('root'));

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
