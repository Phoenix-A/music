import Vue from "vue";
import VueRouter from "vue-router";
//import Resource from 'vue-resource'

//Vue.use(Resource);
Vue.use(VueRouter);
import Main from "@/views/Main";
import Recommen from "@/views/Recommen";
import Singer from "@/views/Singer";
import Search from "@/views/Search";
import Rank from "@/views/Rank";
const routes = [{
  path: '/',
  component: Main,
  children: [{
      path: '',
      component: Recommen
    },
    {
      path: 'recommen',
      component: Recommen
    },
    {
      path: 'singer',
      component: Singer
    },
    {
      path: 'rank',
      component: Rank
    },
    {
      path: 'search',
      component: Search
    }
  ]
}];

const router = new VueRouter({
  routes,
});

export default router;