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
import {connect, useSelector} from 'react-redux';
import {compose} from 'redux';

const Tab3Screen = ({firstName, lastName, logout}) => {
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
