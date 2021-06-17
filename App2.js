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
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 15,
          }}>
          Mon texte
        </Text>
        <Image
          //source={require('./src/assets/no-profile-picture.png')}
          source={{
            uri: 'https://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png',
          }}
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode="cover"
        />
        <ScrollView
          style={{
            height: 200,
          }}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}>
          <View style={{height: 500, backgroundColor: 'blue'}} />
          <View style={{height: 500, backgroundColor: 'green'}} />
          <View style={{height: 500, backgroundColor: 'yellow'}} />
        </ScrollView>
        <FlatList
          data={[1, 2, 3]}
          // horizontal
          // numColumns={2}
          renderItem={({item, index}) => {
            return <Text ref={index}>{item}</Text>;
          }}
        />
        <TouchableOpacity onPress={() => Alert.alert('Titre', 'Contenu')}>
          <Text>Toto</Text>
        </TouchableOpacity>
        <TextInput
          value={'Toto'}
          placeholder={'Nom'}
          onChangeText={() => console.log('Change text')}
          onEndEditing={() => console.log('Input end')}
          //secureTextEntry
        />
      </View>
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
