import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';

import styles from './SearchScreen.styles';

import {searchAddresses} from '../../../services/addressService';

const SearchScreen = ({route, navigation}) => {
  const [input, setInput] = useState();
  const [data, setData] = useState();

  const search = useCallback(async () => {
    const newData = await searchAddresses(input);

    setData(newData);
  }, [input]);

  const renderItem = ({item, index}) => (
    <View>
      <Text style={styles.addressText}>{item.properties.label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder={'Rechercher une adresse ...'}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity onPress={search} style={styles.searchBtn}>
          <Text>Rechercher</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
