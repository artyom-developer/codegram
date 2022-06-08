import React from 'react'
import ReactDOM from 'react-dom'  
import Context from './Context'
import { App } from './App'

// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//     uri: 'https://petgram-server-clgg.vercel.app/graphql', // En el proyecto usamos https://petgram-server.midudev.now.sh/graphql aquí debes colocar el tuyo
//     cache: new InMemoryCache(),
//     request: operation => {
//         const token = window.sessionStorage.getItem('token')
//         const authorization = token ? `Bearer ${token}` : ""
//         operation.setContext({
//             headers: {
//                 authorization
//             }
//         })
//     }
// }) 

import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, from, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
  
  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      })
    }
    return forward(operation)
  })

  const errorMiddleware = onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location = '/user'
    }
  })
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      errorMiddleware,
      authMiddleware,
      new HttpLink({
        uri: 'https://petgram-server-clgg.vercel.app/graphql'
      })
    ])
  })

function Index() {
    return ( 
        <Context.Provider >
            <ApolloProvider client={client}> <App /> </ApolloProvider>
        </Context.Provider>
    );
}

ReactDOM.render(<Index />, document.getElementById('app') )
 