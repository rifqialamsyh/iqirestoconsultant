import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

const FavoriteRestoClient = {
  async getResto(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestoClient() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putResto(restoran) {
    if (!restoran.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restoran);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchRestos(query) {
    return (await this.getAllRestoClient()).filter((restoran) => {
      const loweredCaseRestoTitle = (restoran.name || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteRestoClient;
