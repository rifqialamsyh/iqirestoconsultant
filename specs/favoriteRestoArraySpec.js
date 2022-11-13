import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];
const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }
    return favoriteResto.find((restoran) => restoran.id === id);
  },
  getAllRestoClient() {
    return favoriteResto;
  },
  putResto(restoran) {
    if (!restoran.hasOwnProperty('id')) {
      return;
    }
    // pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getResto(restoran.id)) {
      return;
    }
    favoriteResto.push(restoran);
  },
  deleteResto(id) {
    // cara boros menghapus resto dengan meng-copy resto yang ada
    // kecuali resto dengan id == id
    favoriteResto = favoriteResto.filter((restoran) => restoran.id !== id);
  },

  searchRestos(query) {
    return this.getAllRestoClient().filter((restoran) => {
      const loweredCaseRestoTitle = (restoran.name || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => (favoriteResto = []));
  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});

