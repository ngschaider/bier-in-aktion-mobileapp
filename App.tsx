/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ApolloProvider from "./components/ApolloProvider";

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ApolloProvider>
      <Header />
      <ProductList />
    </ApolloProvider>
  );
};

export default App;
