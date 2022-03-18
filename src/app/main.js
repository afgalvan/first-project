import './main.scss';

import app from './components/App';

const main = () => {
  app.init();
};

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
