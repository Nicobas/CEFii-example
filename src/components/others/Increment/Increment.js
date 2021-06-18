import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import styles from './Increment.styles';
import {useDispatch, useSelector} from 'react-redux';

const Increment = () => {
  const incrementValue = useSelector(s => s.incrementValue);
  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch({type: 'increment'});
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch({type: 'decrement'});
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Composant Increment</Text>
      <Text style={styles.text}>{incrementValue}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={increment}>
          <Text>Incrémenter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={decrement}>
          <Text>Décrémenter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Increment;
