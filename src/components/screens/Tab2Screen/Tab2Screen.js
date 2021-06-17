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

import styles from './Tab2Screen.styles';

const Tab2Screen = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Tab 2 Screen</Text>
    </SafeAreaView>
  );
};

export default Tab2Screen;
