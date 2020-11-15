import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.0.18:5000',
  cache: new InMemoryCache()
});

export default (args: any) => {
    const children: React.Component[] = args.children

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}