import React, {useCallback, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const useController = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadData = async () => {
      console.log('load data');
      const json = await AsyncStorage.getItem('@tast');
      const newData = JSON.parse(json);
      setData(newData || []);
    };
    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      console.log('save data');
      const json = JSON.stringify(data);
      await AsyncStorage.setItem('@tast', json);
    };
    saveData();
  }, [data]);

  const addTask = useCallback(() => {
    const task = {
      id: Math.random().toString(16).substring(2, 6),
      text: input,
      isChecked: false,
    };

    const newData = [...data, task];

    setData(newData);
    setInput('');
  }, [data, input]);

  const deleteTask = useCallback(
    item => {
      const newData = data.filter(o => o.id !== item.id);

      setData(newData);
    },
    [data],
  );

  const checkTask = useCallback(
    item => {
      item.isChecked = !item.isChecked;
      setData([...data]);
    },
    [data],
  );

  const dataFiltered = useMemo(() => {
    return data.filter(o => o.text.includes(search));
  }, [data, search]);

  return {
    deleteTask,
    checkTask,
    dataFiltered,
    search,
    setSearch,
    input,
    setInput,
    addTask,
  };
};

export default useController;
