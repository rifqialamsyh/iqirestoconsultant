import HomeMenu from '../views/pages/home-menu';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': HomeMenu, // default page
  '/home-menu': HomeMenu,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
