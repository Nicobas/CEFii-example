import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';

import styles from './TaskDetailScreen.styles';

const TaskDetailScreen = ({route, navigation}) => {
  const {task} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{'(' + task.id + ') ' + task.text + ' ' + task.isChecked}</Text>
      <TouchableOpacity onPress={navigation.goBack}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TaskDetailScreen;
