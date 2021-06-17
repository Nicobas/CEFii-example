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

import styles from './Page2Screen.styles';

const Page2Screen = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page 2 Screen</Text>
    </SafeAreaView>
  );
};

export default Page2Screen;
