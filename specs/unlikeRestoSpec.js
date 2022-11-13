import FavoriteRestoClient from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoClient.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoClient.deleteResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto client"]'),
    ).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto client"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document
      .querySelector('[aria-label="unlike this resto client"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoClient.getAllRestoClient()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // menghapus terlebih dahulu dari daftar resto yang disukai
    await FavoriteRestoClient.deleteResto(1);

    // lalu, simulasikan pengguna menekan widget unlike resto
    document
      .querySelector('[aria-label="unlike this resto client"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoClient.getAllRestoClient()).toEqual([]);
  });
});
