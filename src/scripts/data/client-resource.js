import API_ENDPOINT from '../globals/api-endpoint';

class ClientResource {
  static async allClient() {
    const response = await fetch(API_ENDPOINT.HOMEMENU);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailClient(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async makeReview(newReview) {
    const response = await fetch(API_ENDPOINT.MAKEREVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });
    return response;
  }
}

export default ClientResource;
