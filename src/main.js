import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'tachyons'
import {ApolloLink} from "apollo-link";
import { GC_AUTH_TOKEN } from './constants/settings'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://sadid.iran.liara.run/api/graphql'
  // uri: 'https://countries.trevorblades.com/'
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem(GC_AUTH_TOKEN)
  operation.setContext({
    headers: {
      authorization: token ? `JWT ${token}` : null
    }
  })

  return forward(operation)
})

const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

Vue.use(VueApollo)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  }else if (to.matched.some(record => record.meta.isGuest)) {
    if (store.getters.isLogin) {
      next({ name: '/' })
    } else {
      next() // go to wherever I'm going
    }
  }
  else {
    next() // does not require auth, make sure to always call next()!
  }
})

new Vue({
  router,
  provide: apolloProvider.provide(),
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
