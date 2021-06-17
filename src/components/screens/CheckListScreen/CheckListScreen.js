import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';

import CheckListCard from '../../cards/CheckListCard/CheckListCard';

import useController from './CheckListScreen.contoller';

import styles from './CheckListScreen.styles';

const CheckListScreen = props => {
  const {
    deleteTask,
    checkTask,
    dataFiltered,
    search,
    setSearch,
    input,
    setInput,
    addTask,
  } = useController(props);

  const renderItem = ({item}) => {
    return (
      <CheckListCard
        task={item}
        isChecked={item.isChecked}
        onDelete={() => deleteTask(item)}
        onCheck={() => checkTask(item)}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {dataFiltered.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>Aucune donnée</Text>
        </View>
      ) : (
        <>
          <TextInput
            style={styles.search}
            value={search}
            onChangeText={setSearch}
            placeholder={'Rechercher ...'}
            placeholderTextColor={'grey'}
          />
          <FlatList
            style={styles.flatList}
            data={dataFiltered}
            renderItem={renderItem}
          />
        </>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder={'A faire ...'}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity onPress={addTask} style={styles.addBtn}>
          <Text>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckListScreen;
