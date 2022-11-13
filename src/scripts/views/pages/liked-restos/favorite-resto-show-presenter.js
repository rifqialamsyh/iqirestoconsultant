class FavoriteRestoShowPresenter {
  constructor({ view, favoriteRestos }) {
    this._view = view;
    this._favoriteRestos = favoriteRestos;

    this._showFavoriteRestos();
  }

  async _showFavoriteRestos() {
    const resto = await this._favoriteRestos.getAllRestoClient();
    this._displayRestos(resto);
  }

  _displayRestos(resto) {
    this._view.showFavoriteRestos(resto);
  }
}

export default FavoriteRestoShowPresenter;
