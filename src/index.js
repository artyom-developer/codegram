import React from 'react'
import ReactDOM from 'react-dom'  
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { App } from './App'
import Context from './Context'

const client = new ApolloClient({
    uri: 'https://petgram-server-clgg.vercel.app/graphql', // En el proyecto usamos https://petgram-server.midudev.now.sh/graphql aquí debes colocar el tuyo
    cache: new InMemoryCache()
})
 

function Index() {
    return ( 
        <Context.Provider >
            <ApolloProvider client={client}> <App /> </ApolloProvider>
        </Context.Provider>
    );
}

ReactDOM.render(<Index />, document.getElementById('app') )
 