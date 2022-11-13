import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-restos/favorite-restos-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-restos/favorite-resto-show-presenter';
import FavoriteRestoClient from '../src/scripts/data/favorite-resto';

describe('Showing all favorite restos', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restos have been liked', () => {
    it('should ask for the favorite restos', () => {
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoClient);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });

      expect(favoriteRestos.getAllRestoClient).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restos have been liked', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(
          document.querySelectorAll('.restoran-item__not__found').length,
        ).toEqual(1);

        done();
      });

      const favoriteRestos = spyOnAllFunctions(FavoriteRestoClient);
      favoriteRestos.getAllRestoClient.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
    });
  });

  describe('When favorite restos exist', () => {
    it('should show the restos', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.client-item').length).toEqual(2);
        done();
      });

      const favoriteRestos = spyOnAllFunctions(FavoriteRestoClient);
      favoriteRestos.getAllRestoClient.and.returnValues([
        {
          id: 11,
          name: 'A',
          rating: 3,
          description: 'Sebuah resto A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          description: 'Sebuah resto B',
        },
      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
    });
  });
});
