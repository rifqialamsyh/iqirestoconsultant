class FavoriteRestosSearchPresenter {
  constructor({ favoriteRestos, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestos = favoriteRestos;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestos(latestQuery);
    });
  }

  async _searchRestos(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestos;
    if (this.latestQuery.length > 0) {
      foundRestos = await this._favoriteRestos.searchRestos(this.latestQuery);
    } else {
      foundRestos = await this._favoriteRestos.getAllRestoClient();
    }

    this._showFoundRestos(foundRestos);
  }

  _showFoundRestos(resto) {
    this._view.showFavoriteRestos(resto);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestosSearchPresenter;
