import GUN from 'gun';
import { render } from 'lib/utils';

import { Repository } from './data/Repository';
import App from './ui/App';

const main = () => {
  render(App, document.getElementById('root'));
  const repo = new Repository(GUN(), 'project');
  repo.saveOn('users', { username: 'bro', password: 'a' });
  console.log(repo.getData('users'));
};

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
