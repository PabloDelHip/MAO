import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quienes_somos from '../views/Quienes-somos'
import Amenidades from '../views/Amenidades'
import Departamentos from '../views/Departamentos'
import Ubicacion from '../views/Ubicacion'
import Contacto from '../views/Contacto'
import Brochure from '../views/Brochure'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page - Mao App',
    }
  },
  {
    path: '/quienes-somos',
    name: 'Quienes_somos',
    component: Quienes_somos,
    meta: {
      title: 'About Page - Mao App',
    }
  },
  {
    path: '/amenidades',
    name: 'Amenidades',
    component: Amenidades,
    meta: {
      title: 'Amenidades Page - Mao App',
    }
  },
  {
    path: '/departamentos',
    name: 'Departamentos',
    component: Departamentos,
    meta: {
      title: 'Departamentos Page - Mao App',
    }
  },
  {
    path: '/ubicacion',
    name: 'Ubicacion',
    component: Ubicacion,
    meta: {
      title: 'Ubicacion Page - Mao App',
    }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
    meta: {
      title: 'Contacto Page - Mao App',
    }
  },
  {
    path: '/ver-brochure',
    name: 'Brochure',
    component: Brochure,
    meta: {
      title: 'Brochure Page - Mao App',
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
