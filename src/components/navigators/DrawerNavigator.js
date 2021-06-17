import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Page1Screen from '../screens/Page1Screen/Page1Screen';
import Page2Screen from '../screens/Page2Screen/Page2Screen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="TabNav">
      <Drawer.Screen name="TabNav" component={TabNavigator} />
      <Drawer.Screen name="Page1" component={Page1Screen} />
      <Drawer.Screen name="Page2" component={Page2Screen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
