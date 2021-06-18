import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import {PERMISSIONS, requestMultiple, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './SearchScreen.styles';

import {searchAddresses} from '../../../services/addressService';

const SearchScreen = ({route, navigation}) => {
  const [input, setInput] = useState();
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState(null);

  const search = useCallback(async () => {
    const newData = await searchAddresses(
      input,
      coords && coords[1],
      coords && coords[0],
    );

    newData && setData(newData);
  }, [coords, input]);

  const updateCurrentPosition = useCallback(async () => {
    const statuses = await requestMultiple([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ]);

    const statusesArray = Object.entries(statuses).map(o => o[1]);

    if (!statusesArray.every(o => o === RESULTS.GRANTED)) {
      return;
    }

    const options = {enableHighAccuracy: true, distanceFilter: 10};

    Geolocation.getCurrentPosition(
      info => {
        const newCoords = [info.coords.longitude, info.coords.latitude];

        console.log(newCoords);

        setCoords(newCoords);
      },
      () => {},
      options,
    );
  }, []);

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
      <TouchableOpacity
        onPress={updateCurrentPosition}
        style={styles.searchBtn}>
        <Text>Mettre à jour ma position</Text>
      </TouchableOpacity>
      {coords && <Text>Position : {coords.toString()}</Text>}
      {/*<FlatList*/}
      {/*  style={styles.flatList}*/}
      {/*  data={data}*/}
      {/*  renderItem={renderItem}*/}
      {/*  keyExtractor={(item, index) => index.toString()}*/}
      {/*/>*/}

      <MapView provider={PROVIDER_GOOGLE} style={styles.map} showsUserLocation>
        {data.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item.geometry.coordinates[1],
              longitude: item.geometry.coordinates[0],
            }}
          />
        ))}
        {coords && (
          <Marker
            coordinate={{
              latitude: coords[1],
              longitude: coords[0],
            }}
          />
        )}
      </MapView>
    </SafeAreaView>
  );
};

export default SearchScreen;
