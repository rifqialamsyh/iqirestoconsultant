import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestoClient from '../src/scripts/data/favorite-resto';

describe('Favorite Resto Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoClient.getAllRestoClient()).forEach(
      async (restoran) => {
        await FavoriteRestoClient.deleteResto(restoran.id);
      },
    );
  });

  itActsAsFavoriteRestoModel(FavoriteRestoClient);
});
