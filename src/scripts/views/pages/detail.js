import UrlParser from '../../routes/url-parser';
import ClientResource from '../../data/client-resource';
import {
  createClientDetailTemplate,
  createReviewTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoClient from '../../data/favorite-resto';

const Detail = {
  async render() {
    return `
    <div id="detail-client-html" class="detail-client"></div>
    <div id="likeButtonContainer"></div>
    <div id="reviewContainer"></div>
      `;
  },

  async afterRender() {
    const Hero = document.querySelector('.hero');
    Hero.style.display = 'none';
    const Quote = document.querySelector('.quote');
    Quote.style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await ClientResource.detailClient(url.id);
    const restoDetailContainer = document.querySelector('#detail-client-html');
    restoDetailContainer.innerHTML = createClientDetailTemplate(resto);
    const restoReviewContainer = document.querySelector('#reviewContainer');
    restoReviewContainer.innerHTML = createReviewTemplate(resto);

    const reviewerName = document.getElementById('input-reviewer-name');
    const reviewerText = document.getElementById('input-reviewer-text');
    const addReview = document.querySelector('#review-submit');
    addReview.addEventListener('click', async (event) => {
      event.preventDefault();
      const newReview = {
        id: resto.id,
        name: reviewerName.value,
        review: reviewerText.value,
      };
      await ClientResource.makeReview(newReview);
      reviewerName.value = '';
      reviewerText.value = '';
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoClient,
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
