import VueRouter from 'vue-router'
import MainPage from '../views/MainPage'
import NotFound from '../views/404'
import MoviesLayout from "../views/movies_page/MoviesLayout";
import AllMoviesPage from "../views/movies_page/AllMoviesPage";
import MoviePage from "../views/movies_page/MoviePage";
import SerialsLayout from "../views/serials_page/SerialsLayout";
import AllSerialsPage from "../views/serials_page/AllSerialsPage";
import SerialPage from "../views/serials_page/SerialPage";
import PersonsLayout from "../views/persons_page/PersonsLayout";
import AllPersonsPage from "../views/persons_page/AllPersonsPage";
import PersonPage from "../views/persons_page/PersonPage";

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/movies',
      name: 'moviesLayout',
      component: MoviesLayout,
      children: [
        {
          path: '',
          name: 'movies',
          component: AllMoviesPage
        },
        {
          path: ':id',
          name: 'moviePage',
          component: MoviePage,
          beforeEnter: (to, from, next) => {
            if(localStorage.getItem('auth')) {
              next()
            } else {
              next({ name: 'movies' })
            }
          }
        },
        {
          path: '*/*',
          redirect: { name: 'movies' }
        },
      ]
    },
    {
      path: '/serials',
      name: 'serialsLayout',
      component: SerialsLayout,
      children: [
        {
          path: '',
          name: 'serials',
          component: AllSerialsPage
        },
        {
          path: ':id',
          name: 'serialPage',
          component: SerialPage,
          beforeEnter: (to, from, next) => {
            if(localStorage.getItem('auth')) {
              next()
            } else {
              next({ name: 'serials' })
            }
          }
        },
        {
          path: '*/*',
          redirect: { name: 'serials' }
        },
      ]
    },
    {
      path: '/persons',
      name: 'personsLayout',
      component: PersonsLayout,
      children: [
        {
          path: '',
          name: 'persons',
          component: AllPersonsPage
        },
        {
          path: ':id',
          name: 'personPage',
          component: PersonPage,
          beforeEnter: (to, from, next) => {
            if(localStorage.getItem('auth')) {
              next()
            } else {
              next({ name: 'persons' })
            }
          }
        },
        {
          path: '*/*',
          redirect: { name: 'persons' }
        },
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})