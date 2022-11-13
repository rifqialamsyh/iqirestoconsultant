import CONFIG from '../../globals/config';

const createClientItemTemplate = (resto) => `
    <article class="client-item" tabindex='0'>
        <div class="client-thumbnail">
            <img class="lazyload client-photo" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
            alt="Gambar Restaurant ${resto.name}">

            <div class="client-location">${resto.city}</div>
        </div>
        <div class="client-content">
            <h3 class="client-rating">Rating: <span>${resto.rating}<span></h3>
            <h3 (${resto.id}) class="client-name">${resto.name}</h3>
            <p class="client-description">${resto.description}</p>

            <button onclick="location.href='/#/detail/${resto.id}'" type="button" class="details-button">
            See Details </button>
        </div>
    </article>
    `;

const createClientDetailTemplate = (resto) => `
        <div class="detail-container">
            <div class="hero-container">
                <img class="hero-detail"
                src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
                alt="${resto.name} photo">
                <div class="hero-location">${resto.city}</div>
            </div>
            <div class="identity-container">
                <div class="identity">
                    <h1 class="identity-category">#${resto.categories.map(
    (set) => set.name,
  )}</h1>
                    <h1 class="identity-name">${resto.name}</h1>
                    <h2 class="identity-address">${resto.address}</h2>
                    <p class="identity-description">
                    ${resto.description}</p>
                </div>
            </div>
            <div class="menus-container">
                <h2>Restaurant Menus</h2>
                <div class="foods-container">
                    <h3 class="menus-type">Foods</h3>   
                    <p class="menus-item">
                    ${resto.menus.foods.map((food) => food.name)}    
                    </p>
                </div>
                <div class="drinks-container">
                    <h3 class="menus-type">Drinks</h3> 
                    <p class="menus-item">
                    ${resto.menus.drinks.map((drink) => drink.name)}
                    </p>
                </div>
            </div>
            
        </div>
        `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto client" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto client" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = (resto) => `
    <div id="" class="add-review-container">
    <h3>Add Your Review</h3>
      <form id="input">
        <div class="input-detail">
          <label for="input-reviewer-name">Name</label>
          <input id="input-reviewer-name" type="text" placeholder="Paulo" required>
        </div>
        <div class="input-detail">
          <label for="input-reviewer-text">Review</label>
          <textarea id="input-reviewer-text" type="text" placeholder="Type your review here" required></textarea>
        </div>
        
        <button id="review-submit" type="submit">Add</button>
      </form>
    </div>

    <div id="" class="review-container">
      ${resto.customerReviews.reduce(
    (item, value) => item.concat(`<br>

      <h3 class="review-name">Dari ${value.name}</h3> 
      <p class="review">${value.review}</p>
      <p class="review-date">diposting pada ${value.date}</p>
      <hr class= "limit">
      `),
    '<h2 class= "cus-reviews">Customer Reviews:</h2>',
  )}
    </div>
    `;

export {
  createClientItemTemplate,
  createClientDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
};
