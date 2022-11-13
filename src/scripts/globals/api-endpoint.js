import CONFIG from './config';

const API_ENDPOINT = {
  HOMEMENU: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  MAKEREVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
