import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StackNavigator from './src/components/navigators/StackNavigator';
import DrawerNavigator from './src/components/navigators/DrawerNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
