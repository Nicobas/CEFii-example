import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';

import CheckListItem from '../../cards/CheckListCard/CheckListCard';

import styles from './Page1Screen.styles';
import Increment from '../../others/Increment/Increment';

const Page1Screen = ({route, navigation}) => {
  const openPage1 = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page 1 Screen</Text>

      <TouchableOpacity style={styles.btn} onPress={openPage1}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Increment />
    </SafeAreaView>
  );
};

export default Page1Screen;
