import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ProductsPage from "./components/ProductsPage";
import SettingsPage from "./components/SettingsPage";
import ApolloProvider from "./components/ApolloProvider";

declare const global: {HermesInternal: null | {}};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <ApolloProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Aktionen">
          <Drawer.Screen name="Aktionen" component={ProductsPage} />
          <Drawer.Screen name="Einstellungen" component={SettingsPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
