import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';

import RootNavigator from './src/components/navigators2/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
