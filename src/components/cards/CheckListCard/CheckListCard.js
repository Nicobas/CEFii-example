import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './CheckListCard.styles';

const CheckListCard = ({task, onDelete, onCheck, isChecked}) => {
  const navigation = useNavigation();

  const onDeletePress = useCallback(() => {
    Alert.alert('Supprimer ' + task.text + ' ?', 'id: ' + task.id, [
      {
        text: 'Annuler',
        //onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: onDelete},
    ]);
  }, [task.id, task.text, onDelete]);

  const openDetailScreen = useCallback(() => {
    const params = {
      task,
    };

    navigation.navigate('TaskDetail', params);
  }, [task, navigation]);

  return (
    <View key={task.id} style={styles.container}>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center'}}
        onPress={openDetailScreen}>
        <Text
          style={[
            styles.text,
            isChecked ? {textDecorationLine: 'line-through'} : undefined,
          ]}>
          {'(' + task.id + ') ' + task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onCheck}
        style={[
          styles.checkboxBtn,
          {
            backgroundColor: isChecked ? 'black' : 'white',
          },
        ]}
      />
      <TouchableOpacity onPress={onDeletePress} style={styles.deleteBtn}>
        <Text>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckListCard;
