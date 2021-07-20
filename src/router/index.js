import Vue from 'vue';
import VueRouter from 'vue-router'
import store from '@/store';

// const Login = () => import('@/components/Login.vue');
// const Register = () => import('@/components/Register.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("../components/Login.vue"),
    // component: Login,
    // meta: {
    //   requiredAuthentication: false,
    //   redirectWhenLoggedIn: true,
    // },
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
    component: () => import("../components/Register.vue"),
    // meta: {
    //   requiredAuthentication: false,
    //   redirectWhenLoggedIn: true,
    // },
  },
  {
    path: '/',
    name: 'home',
    component: () => import("../components/Calendar.vue"),
    // component: Login,
    // meta: {
    //   requiredAuthentication: false,
    //   redirectWhenLoggedIn: true,
    // },
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import("../components/Home.vue"),

  // },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

// const beforeRouteEnter = async (to, from, next) => {
//   if (to.meta.requiredAuthentication) {
//     // Redirect user if not logged in
//     if (Vue.$store.getters['auth/authenticated']) {
//       next();
//     } else {
//       next({ name: 'login' });
//     }
//   } else next();

//   if (to.meta.userRole) {
//     // Redirect user if user role does not match
//     if (to.meta.userRole !== Vue.$store.getters['auth/getUserRole']) { // TODO: FIX async BUG
//       next({ name: 'home' });
//     } else next();
//   } else next();

//   if (to.meta.redirectWhenLoggedIn) {
//     // Redirect user if logged in but tried to access login/register
//     if (Vue.$store.getters['auth/authenticated']) {
//       next({ name: 'home' });
//     } else next();
//   } else next();
// };

// router.beforeEach(beforeRouteEnter);

router.beforeEach( async(to,from,next)=>{

  // get login state using whoami and axios
  let response = await Vue.axios.get('/api/whoami');
  // console.log(response);
  // response.data is payoload
  // vuex store dispatch method is asynchorous so we need to await it
  await store.dispatch("setLoggedInUser", response.data);
  let isLoggedIn = store.state.isLoggedIn;
  // console.log(store.state.username);
  // console.log(store.state.password);
  // console.log(store.state.role);
  // await 
  // console.log(to.name);
  
  if(to.name === "login" && isLoggedIn){
    // redirect to home page
    console.log("hi from home");
    next({path:'/'})
  } 
  // if (to.name == "register"){
  //   console.log("hi register");
  //   next({name:'register'});
  // }
  if(to.name !== "login" && to.name !== "register"&& !isLoggedIn){
    // redirect to login page
    
    console.log("hi from login");
    next({name:'login'});
  } else {
    console.log("hi from next");
    next();
  }
}

);

Vue.$router = router;

export default router;
