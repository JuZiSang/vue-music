import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home/Home.vue'),
      children: [
        {
          path: 'recommend',
          component: () => import('./views/Home/components/Recommend.vue')
        },
        {
          path: 'hotSearch',
          component: () => import('./views/Home/components/HotSearch.vue')
        },
        {
          path: 'search',
          component: () => import('./views/Home/components/Search.vue')
        },
        {
          path: 'searchList',
          component: () => import('./views/Home/components/SearchList.vue')
        }
      ]
    },
    {
      path: 'playlist',
      component: () => import('./views/PlayList/PlayList.vue')
    },
    {
      path: 'player',
      component: () => import('./views/Player/Player.vue')
    },
    {
      path: 'albumInfo',
      component: () => import('./views/AlbumInfo/AlbumInfo.vue')
    }
  ]
})
