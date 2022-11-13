import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoClient from '../../src/scripts/data/favorite-resto';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestos: FavoriteRestoClient,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
