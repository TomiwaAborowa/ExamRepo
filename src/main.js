import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeTest from "@/views/HomeTest.vue";

import {createPinia} from 'pinia'
import {createHead} from '@vueuse/head'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const pinia = createPinia()
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeTest,
    },

    {
      path: '/tomiwaaborowa/repo/:repoName',
      name: 'IndRepo',
      component:  () => import("@/views/IndRepo.vue"),
    },
    {
    path: "/tomiwaaborowa/DataTable",
    name: "MyRepos",
    component: () => import("@/views/DataTable.vue"),
  },
    {
      path: "/:pathmatch(.*)*",
      name: "not-found",
      component: () => import("@/views/404Page.vue"),
    },
  ],
});
createApp(App).use(router)
.use(pinia)
.use(head)
.mount("#app");
