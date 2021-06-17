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
  const renderImage = () => {
    return <Image source={require('./src/assets/no-profile-picture.png')} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Inscription
        </Text>
        {renderImage()}
        <TextInput
          style={styles.input}
          placeholder={'Prénom'}
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder={'Nom'}
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => Alert.alert('Inscription')}
          style={{
            width: 200,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 20,
            alignSelf: 'center',
          }}>
          <Text>Envoyer</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    backgroundColor: '#b8b8b8',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 5,
    paddingHorizontal: 10,
    height: 50,
  },
});

export default App;
