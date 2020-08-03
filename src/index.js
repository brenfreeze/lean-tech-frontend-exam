import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'

import App from './App'
import client from './services/client'
import configureStore from './store/'

import './styles/styles.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  ,
  document.getElementById('root')
)