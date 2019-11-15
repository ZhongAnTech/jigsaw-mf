import Vue from "vue";
import Router from "vue-router";
import Index from "@/pages/Notify";

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default function getRouter(base) {
  return new Router({
    mode: "hash",
    base,
    routes: [
      {
        path: "/",
        name: "index",
        component: Index
      },
      {
        path: "/insure",
        name: "insure",
        component: () => import("@/pages/Insure")
      },
      {
        path: "/outOrder",
        name: "outOrder",
        component: () => import("@/pages/outOrder")
      }
    ]
  });
}
