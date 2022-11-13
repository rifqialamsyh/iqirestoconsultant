import FavoriteRestosSearchPresenter from '../src/scripts/views/pages/liked-restos/favorite-restos-search-presenter';
import FavoriteRestoClient from '../src/scripts/data/favorite-resto';
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-restos/favorite-restos-search-view';

describe('Searching restos', () => {
  let presenter;
  let favoriteRestos;
  let view;
  const searchRestos = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };
  const setRestoSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };
  const constructPresenter = () => {
    favoriteRestos = spyOnAllFunctions(FavoriteRestoClient);
    presenter = new FavoriteRestosSearchPresenter({
      favoriteRestos,
      view,
    });
  };
  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });
  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestos('resto a');
      expect(presenter.latestQuery).toEqual('resto a');
    });
    it('should ask the model to search for restos', () => {
      searchRestos('resto a');
      expect(favoriteRestos.searchRestos).toHaveBeenCalledWith('resto a');
    });

    it('should show the found restos', () => {
      presenter._showFoundRestos([{ id: 1 }]);
      expect(document.querySelectorAll('.client-item').length).toEqual(1);

      presenter._showFoundRestos([
        {
          id: 1,
          name: 'Satu',
        },
        {
          id: 2,
          name: 'Dua',
        },
      ]);
      expect(document.querySelectorAll('.client-item').length).toEqual(2);
    });

    it('should show the name of the found restos', () => {
      presenter._showFoundRestos([
        {
          id: 1,
          name: 'Satu',
        },
      ]);
      expect(
        document.querySelectorAll('.client-name').item(0).textContent,
      ).toEqual('Satu');
    });

    it('should show - when the resto returned does not contain a name', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        const restoTitles = document.querySelectorAll('.client-name');
        expect(restoTitles.item(0).textContent).toEqual('undefined');

        done();
      });
      favoriteRestos.searchRestos
        .withArgs('resto a')
        .and.returnValues([{ id: 444 }]);
      searchRestos('resto a');
    });
  });
  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestos(' ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestos('    ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestos('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestos('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });
    it('should show all favorite restos', () => {
      searchRestos('    ');
      expect(favoriteRestos.getAllRestoClient).toHaveBeenCalled();
    });
  });

  describe('When no favorite restos could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(
          document.querySelectorAll('.restoran-item__not__found').length,
        ).toEqual(1);
        done();
      });

      favoriteRestos.searchRestos.withArgs('resto a').and.returnValues([]);

      searchRestos('resto a');
    });

    it('should not show any resto', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.client-item').length).toEqual(0);
        done();
      });

      favoriteRestos.searchRestos.withArgs('resto a').and.returnValues([]);
      searchRestos('resto a');
    });
  });
});
