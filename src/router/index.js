import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Support from "../views/Support.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/user/Dashboard.vue";
import MyApps from "../views/user/MyApps.vue";
import Transactions from "../views/user/Transactions.vue";
import Profile from "../views/user/Profile.vue";
import Integration from "../components/accounts/Integration.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/apps",
    name: "MyApps",
    component: MyApps,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
  },
  {
    path: "/integration",
    name: "Integration",
    component: Integration,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
