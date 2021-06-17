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

import styles from './Tab3Screen.styles';
import {useDispatch, useSelector} from 'react-redux';

const Tab3Screen = () => {
  const {firstName, lastName} = useSelector(s => s.userData);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch({type: 'logout'});
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Tab 3 Screen</Text>
      <Text style={styles.text}>Bonjour {firstName + ' ' + lastName}</Text>
      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text>Se déconnecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Tab3Screen;
