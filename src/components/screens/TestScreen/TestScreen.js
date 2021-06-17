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

import styles from './TestScreen.styles';

const TestScreen = ({route, navigation}) => {
  const closeScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Test Screen</Text>
      <TouchableOpacity onPress={closeScreen}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TestScreen;
