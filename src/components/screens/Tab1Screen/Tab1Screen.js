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

import styles from './Tab1Screen.styles';
import Increment from '../../others/Increment/Increment';

const Tab1Screen = ({route, navigation}) => {
  const openPage1 = useCallback(() => {
    navigation.navigate('Page1');
  }, [navigation]);

  const openDrawer = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  const goToTab2 = useCallback(() => {
    navigation.navigate('Tab2');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Tab 1 Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={openPage1}>
        <Text>Open Page 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={openDrawer}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={goToTab2}>
        <Text>Go to Tab2</Text>
      </TouchableOpacity>
      <Increment />
    </SafeAreaView>
  );
};

export default Tab1Screen;
