import Vue from 'vue';
import VueRouter from 'vue-router'

const Login = () => import('@/components/Login.vue');
const Register = () => import('@/components/Register.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiredAuthentication: false,
      redirectWhenLoggedIn: true,
    },
  },
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//     meta: {
//       requiredAuthentication: false,
//     },
//   },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiredAuthentication: false,
      redirectWhenLoggedIn: true,
    },
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

const beforeRouteEnter = async (to, from, next) => {
  if (to.meta.requiredAuthentication) {
    // Redirect user if not logged in
    if (Vue.$store.getters['auth/authenticated']) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else next();

  if (to.meta.userRole) {
    // Redirect user if user role does not match
    if (to.meta.userRole !== Vue.$store.getters['auth/getUserRole']) { // TODO: FIX async BUG
      next({ name: 'home' });
    } else next();
  } else next();

  if (to.meta.redirectWhenLoggedIn) {
    // Redirect user if logged in but tried to access login/register
    if (Vue.$store.getters['auth/authenticated']) {
      next({ name: 'home' });
    } else next();
  } else next();
};

router.beforeEach(beforeRouteEnter);

Vue.$router = router;

export default router;
