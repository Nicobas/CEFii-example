import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const FunctionComponent = ({name, children}) => {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('le composant est opérationnel');

    return () => {
      console.log('le composant va être détruit');
    };
  }, []);

  useEffect(() => {
    console.log('le props name a changé');
  }, [name]);

  useEffect(() => {
    console.log('le state value a changé');
  }, [value]);

  const memoizedValue = useMemo(() => {
    return name + ' ' + value;
  }, [value, name]);

  const onTouchablePress = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  console.log('render');
  return (
    <View>
      <Text>Name : {name}</Text>
      <View>
        <Text>Children :</Text>
        {children}
      </View>
      <TouchableOpacity onPress={onTouchablePress}>
        <Text>Value : {value}</Text>
      </TouchableOpacity>
      <Text>Calculated value : {name + ' ' + value}</Text>
      <Text>MemorizedValue : {memoizedValue}</Text>
      <TextInput
        value={email}
        //onChangeText={value => setEmail(value)}
        onChangeText={setEmail}
        placeholder={'Email'}
      />
      <Text>Email : {email}</Text>
      <Text>Mon composant fonction</Text>
    </View>
  );
};

export default FunctionComponent;
