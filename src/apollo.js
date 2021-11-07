import React from "react";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

export default ( <ApolloProvider client={client}>
    <React.StrictMode>
    <App/>
    </React.StrictMode>
</ApolloProvider>);