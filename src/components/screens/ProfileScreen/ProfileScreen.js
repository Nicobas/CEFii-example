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

import styles from './ProfileScreen.styles';
import {useDispatch, useSelector} from 'react-redux';

const ProfileScreen = () => {
  const {firstName, lastName} = useSelector(s => s.userData);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch({type: 'logout'});
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Text style={styles.text}>Bonjour {firstName + ' ' + lastName}</Text>
      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text>Se déconnecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
