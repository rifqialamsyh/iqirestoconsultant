import FavoriteRestoClient from '../../data/favorite-resto';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';
import FavoriteRestosSearchPresenter from './liked-restos/favorite-restos-search-presenter';
import FavoriteRestoSearchView from './liked-restos/favorite-restos-search-view';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const Hero = document.querySelector('.hero');
    Hero.style.display = 'none';
    const Quote = document.querySelector('.quote');
    Quote.style.display = 'none';

    new FavoriteRestoShowPresenter({
      view,
      favoriteRestos: FavoriteRestoClient,
    });
    new FavoriteRestosSearchPresenter({
      view,
      favoriteRestos: FavoriteRestoClient,
    });
  },
};

export default Favorite;
