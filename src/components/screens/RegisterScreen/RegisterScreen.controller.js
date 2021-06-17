import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

const useController = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(true);

  const dispatch = useDispatch();

  const validateFirstName = useCallback(() => {
    setIsFirstNameValid(firstName.length >= 3);
  }, [firstName]);

  const validateLastName = useCallback(() => {
    setIsLastNameValid(lastName.length >= 3);
  }, [lastName]);

  const validatePasswordConfirm = useCallback(() => {
    setIsPasswordConfirmValid(passwordConfirm === password);
  }, [password, passwordConfirm]);

  const validatePassword = useCallback(() => {
    setIsPasswordValid(password.length >= 6);
    passwordConfirm && validatePasswordConfirm();
  }, [password, passwordConfirm, validatePasswordConfirm]);

  const onSubmit = useCallback(() => {
    if (
      !firstName ||
      !lastName ||
      !password ||
      !passwordConfirm ||
      !isFirstNameValid ||
      !isLastNameValid ||
      !isPasswordValid ||
      !isPasswordConfirmValid
    ) {
      return Alert.alert('Erreur', 'Les champs sont vides ou non valides');
    }

    const action = {type: 'login', data: {firstName, lastName}};
    dispatch(action);
  }, [
    dispatch,
    firstName,
    isFirstNameValid,
    isLastNameValid,
    isPasswordConfirmValid,
    isPasswordValid,
    lastName,
    password,
    passwordConfirm,
  ]);

  return {
    firstName,
    setFirstName,
    validateFirstName,
    isFirstNameValid,
    lastName,
    setLastName,
    validateLastName,
    isLastNameValid,
    password,
    setPassword,
    validatePassword,
    isPasswordValid,
    passwordConfirm,
    setPasswordConfirm,
    validatePasswordConfirm,
    isPasswordConfirmValid,
    onSubmit,
  };
};

export default useController;
