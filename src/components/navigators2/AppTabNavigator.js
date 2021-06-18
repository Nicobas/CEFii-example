import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CheckListScreen from '../screens/CheckListScreen/CheckListScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import Tab1Screen from '../screens/Tab1Screen/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen/Tab2Screen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        style: {
          backgroundColor: '#c6c6c6',
        },
        labelStyle: {
          fontSize: 12,
        },
        activeTintColor: '#ff802e',
        inactiveTintColor: '#425be0',
      }}>
      <Tab.Screen
        name="CheckList"
        component={CheckListScreen}
        options={{
          tabBarLabel: 'Ma Todo',
          tabBarIcon: ({focused, color, size, name}) => {
            return (
              <FontAwesome name="th-list" size={size * 0.9} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Recherche',
          tabBarIcon: ({focused, color, size, name}) => {
            return (
              <FontAwesome name="search" size={size * 0.9} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          tabBarLabel: 'Tab 1',
          tabBarIcon: ({focused, color, size, name}) => {
            return <FontAwesome name="heart" size={size * 0.9} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Tab 2',
          tabBarIcon: ({focused, color, size, name}) => {
            return <FontAwesome name="star" size={size * 0.9} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({focused, color, size, name}) => {
            return <FontAwesome name="user" size={size * 0.9} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
