import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';

const RootNavigator = () => {
  const userData = useSelector(s => s.userData);

  return (
    <NavigationContainer>
      {userData ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
