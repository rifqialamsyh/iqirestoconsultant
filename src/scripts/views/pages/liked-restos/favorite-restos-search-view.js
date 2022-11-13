import { createClientItemTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
    <div class="content">
    <input id="query" type="text" placeholder="Search Resto Name">
    <h2 class="content__heading">Your Liked Resto</h2>
        <div id="restoForEmptyResto">
        </div>
        <div id="resto" class="resto">
        </div>
    </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestos(restoran) {
    this.showFavoriteRestos(restoran);
  }

  showFavoriteRestos(restoran = []) {
    let html;
    let htmlForEmpty;
    if (restoran.length) {
      html = restoran.reduce(
        (carry, resto) => carry.concat(createClientItemTemplate(resto)),
        '',
      );
      htmlForEmpty = '';
    } else {
      html = '';
      htmlForEmpty = this._getEmptyRestoTemplate();
    }

    document.getElementById('resto').innerHTML = html;
    document.getElementById('restoForEmptyResto').innerHTML = htmlForEmpty;

    document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="restoran-item__not__found resto__not__found">Tidak ada informasi dari restoran untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
