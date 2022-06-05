import React from 'react'
import ReactDOM from 'react-dom'  
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { App } from './App'

const client = new ApolloClient({
    uri: 'https://petgram-server-clgg.vercel.app/graphql', // En el proyecto usamos https://petgram-server.midudev.now.sh/graphql aquí debes colocar el tuyo
    cache: new InMemoryCache()
})
 

function Index() {
    return ( 
        <ApolloProvider client={client}> <App /> </ApolloProvider>
    );
}

ReactDOM.render(<Index />, document.getElementById('app') )
 