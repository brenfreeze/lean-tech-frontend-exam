import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://stark-tor-50435.herokuapp.com',
  cache: new InMemoryCache()
})

export default client