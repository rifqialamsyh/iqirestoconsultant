import ClientResource from '../../data/client-resource';
import { createClientItemTemplate } from '../templates/template-creator';

const HomeMenu = {
  async render() {
    return `
        <h2 id="afterSkip" class="our-client-label">Our Client</h2>
        <div id="our-client-html" class="our-client">
        </div>
    `;
  },

  async afterRender() {
    const Hero = document.querySelector('.hero');
    Hero.style.display = 'unset';
    const Quote = document.querySelector('.quote');
    Quote.style.display = 'unset';
    const resto = await ClientResource.allClient();
    const restoContainer = document.querySelector('#our-client-html');
    resto.forEach((restoran) => {
      restoContainer.innerHTML += createClientItemTemplate(restoran);
    });
  },
};

export default HomeMenu;
