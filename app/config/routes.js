import Vue from 'vue';
import Router from 'vue-router';
import { isLogin } from 'utils/authService';

const Home = () => import('components/Layout/Body/Home/index');
const Login = () => import('components/Login/index');
const NotFound = () => import('components/NotFound');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  // scrollBehavior: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresNotAuth: true,
      },
    },


    {
      path: '*',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0);
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogin()) {
      return next({ path: '/login' });
    }
  }
  if (to.matched.some(record => record.meta.requiresNotAuth)) {
    if (isLogin()) {
      return next({ path: '/' });
    }
  }
  next();
});
export default router;
