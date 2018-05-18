import Vue from 'vue';
import Router from 'vue-router';
import {isLogin} from 'utils/authService';

const Home = () => import(/* webpackChunkName: "Home" */ 'components/Layout/Body/Home/index');
const Login = () => import(/* webpackChunkName: "Login" */ 'components/Login/index');
const NotFound = () => import(/* webpackChunkName: "NotFound" */ 'components/NotFound');
const AllUserGroups = () => import(/* webpackChunkName: "AllUserGroups" */ 'components/Layout/Body/UserManage/AllUserGroups');
const AddUserGroup = () => import(/* webpackChunkName: "AddUserGroup" */ 'components/Layout/Body/UserManage/AddUserGroup');

Vue.use(Router);

const router = new Router({
    mode: 'history',
    // scrollBehavior: true,
    routes: [
        {
            path: '/userManage/addUserGroup',
            name: 'addUserGroup',
            component: AddUserGroup,
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
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
            path: '/userManage/allUserGroups',
            name: 'allUserGroups',
            component: AllUserGroups,
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
            return next({path: '/login'});
        }
    }
    if (to.matched.some(record => record.meta.requiresNotAuth)) {
        if (isLogin()) {
            return next({path: '/'});
        }
    }
    next();
});
export default router;
