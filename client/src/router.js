import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/league',
    name: 'League',
    component: loadPage('LeaguePage')
  },
  {
    path: '/activeLeague/:leagueId',
    name: 'ActiveLeague',
    component: loadPage(`ActiveLeaguePage`)
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: loadPage('GetStartedPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/conversion',
    name: 'Conversion Testing',
    component: loadPage('ConversionTesting'),
    beforeEnter: authGuard
  },
  {
    path: '/componentViewer',
    name: 'ComponentViewer',
    component: loadPage('ComponentViewer'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
