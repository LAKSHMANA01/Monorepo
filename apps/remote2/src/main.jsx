
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // ✅ Add this


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter> {/* ✅ Wrap App in Router */}
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);