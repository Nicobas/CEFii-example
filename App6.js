import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CheckListScreen from './src/components/screens/CheckListScreen/CheckListScreen';
import TaskDetailScreen from './src/components/screens/TaskDetailScreen/TaskDetailScreen';
import TestScreen from './src/components/screens/TestScreen/TestScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CheckList" component={CheckListScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
