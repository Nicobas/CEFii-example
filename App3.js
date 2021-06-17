/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          backgroundColor: 'green',
          padding: 20,
          borderColor: '#000',
          borderWidth: 3,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'purple'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'pink'}} />
      </View>
      <View style={{flex: 2, backgroundColor: 'blue'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
