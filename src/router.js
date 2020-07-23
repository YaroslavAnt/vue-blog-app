import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import store from "./store";
// import store from "./store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./pages/Login.vue"),
  },
  {
    path: "/user/:userId",
    name: "User",
    component: () => import("./pages/User.vue"),
  },
  {
    path: "/post/:postId",
    name: "Post",
    component: () => import("./pages/Post.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !store.state.user) next({ name: "Login" });
  else next();
});

export default router;
