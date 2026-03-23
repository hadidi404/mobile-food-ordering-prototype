import { createBrowserRouter } from 'react-router';
import { Splash } from './pages/Splash';
import { Onboarding } from './pages/Onboarding';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Restaurant } from './pages/Restaurant';
import { FoodDetail } from './pages/FoodDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Favorites } from './pages/Favorites';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Splash,
  },
  {
    path: '/onboarding',
    Component: Onboarding,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/explore',
    Component: Explore,
  },
  {
    path: '/restaurant/:id',
    Component: Restaurant,
  },
  {
    path: '/food/:id',
    Component: FoodDetail,
  },
  {
    path: '/cart',
    Component: Cart,
  },
  {
    path: '/checkout',
    Component: Checkout,
  },
  {
    path: '/favorites',
    Component: Favorites,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);