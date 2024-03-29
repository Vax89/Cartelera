import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'
import Movie from '@/components/Movie'
import SearchMovie from '@/components/SearchMovie'
// import Register from '@/components/Auth/Register.vue'
// import Signin from '@/components/Auth/Signin.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
 
  routes: [
    {
      path: '/',
      name: 'LatestMovie',
      component: LatestMovie
    },
    
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: Movie
    },
    {
      path: '/search/:name',
      name: 'SearchMovie',
      props: true,
      component: SearchMovie
    },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register
    // },
    // {
    //   path: '/login',
    //   name: 'Signin',
    //   component: Signin
    // }
  ],
  
})
