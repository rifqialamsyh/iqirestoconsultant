const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('#query');
  I.see(
    'Tidak ada informasi dari restoran untuk ditampilkan',
    '.restoran-item__not__found',
  );
});

Scenario('liking one resto', async ({ I }) => {
  I.see(
    'Tidak ada informasi dari restoran untuk ditampilkan',
    '.restoran-item__not__found',
  );

  I.amOnPage('/');

  I.waitForElement('.client-item');
  I.seeElement('.details-button');

  const firstResto = locate('.details-button').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.client-item');
  const likedRestoName = await I.grabTextFrom('.details-button');
  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see(
    'Tidak ada informasi dari restoran untuk ditampilkan',
    '.restoran-item__not__found',
  );
  I.amOnPage('/');
  I.seeElement('.details-button');

  const firstResto = locate('.details-button').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.client-item');

  const unlikedRestoName = await I.grabTextFrom('.details-button');
  assert.strictEqual(firstRestoName, unlikedRestoName);

  I.seeElement('.details-button');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see(
    'Tidak ada informasi dari restoran untuk ditampilkan',
    '.restoran-item__not__found',
  );
});

Scenario('add a review on resto ', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.client-item');
  I.seeElement('.details-button');

  const firstResto = locate('.details-button').first();
  I.click(firstResto);

  I.seeElement('#input-reviewer-name');
  I.fillField('Name', 'Budi');
  I.seeElement('#input-reviewer-text');
  I.fillField('Review', 'Resto yang nyaman');

  I.seeElement('#review-submit');
  I.click('#review-submit');
});
