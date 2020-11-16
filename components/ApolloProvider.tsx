import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ApolloLinkTimeout from "apollo-link-timeout";
import { API_URI } from "@env";

const client = new ApolloClient({
    uri: API_URI,
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