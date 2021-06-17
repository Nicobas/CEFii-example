import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

import Page1Screen from '../screens/Page1Screen/Page1Screen';
import Page2Screen from '../screens/Page2Screen/Page2Screen';

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerNav" component={DrawerNavigator} />

      <Stack.Screen name="Page1" component={Page1Screen} />
      <Stack.Screen name="Page2" component={Page2Screen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
