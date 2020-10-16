import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesDetails from './pages/OrphanagesDetails';
import OrphanagesMap from './pages/OrphanagesMap';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap}></Screen>
        <Screen name="OrphanagesDetails" component={OrphanagesDetails}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
