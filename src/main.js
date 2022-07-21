import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import {
  AppoloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
})

const cache = new InMemoryCache()

const apolloClient = new AppoloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.mount('#app')

