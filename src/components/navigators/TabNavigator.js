import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CheckListScreen from '../screens/CheckListScreen/CheckListScreen';
import Tab1Screen from '../screens/Tab1Screen/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen/Tab2Screen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#c6c6c6',
        },
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        activeTintColor: '#ff802e',
        inactiveTintColor: '#425be0',
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1Screen}
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
        name="Tab2"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({focused, color, size, name}) => {
            return <FontAwesome name="star" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tab3"
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

export default TabNavigator;
