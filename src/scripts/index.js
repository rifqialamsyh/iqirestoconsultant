import 'regenerator-runtime'; /* for async await transpile */
import './component/nav-bar';
import './component/quotes-bar';
import '../styles/top.css';
import '../styles/content.css';
import '../styles/responsive.css';
import '../styles/skip.css';
import '../styles/detail.css';
import '../styles/detail-responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  menu: document.querySelector('#menu'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#client-container'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
