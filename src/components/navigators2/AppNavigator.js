import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Page1Screen from '../screens/Page1Screen/Page1Screen';
import Page2Screen from '../screens/Page2Screen/Page2Screen';
import AppTabNavigator from './AppTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabNav">
      <Stack.Screen name="AppTab" component={AppTabNavigator} />
      <Stack.Screen name="Page1" component={Page1Screen} />
      <Stack.Screen name="Page2" component={Page2Screen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
