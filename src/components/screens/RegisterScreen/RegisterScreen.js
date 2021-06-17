import React from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

import styles from './RegisterScreen.styles';
import useController from './RegisterScreen.controller';

const RegisterScreen = props => {
  const {
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
  } = useController(props);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Inscription</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/no-profile-picture.png')}
      />
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        onEndEditing={validateFirstName}
        style={[
          styles.input,
          !isFirstNameValid ? styles.errorInput : undefined,
        ]}
        placeholder={'Prénom'}
        placeholderTextColor="grey"
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        onEndEditing={validateLastName}
        style={[styles.input, !isLastNameValid ? styles.errorInput : undefined]}
        placeholder={'Nom'}
        placeholderTextColor="grey"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        onEndEditing={validatePassword}
        style={[styles.input, !isPasswordValid ? styles.errorInput : undefined]}
        placeholder={'Mot de passe'}
        secureTextEntry={true}
      />
      <TextInput
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        onEndEditing={validatePasswordConfirm}
        style={[
          styles.input,
          !isPasswordConfirmValid ? styles.errorInput : undefined,
        ]}
        placeholder={'Confirmation du mot de passe'}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.submitBtn}>
        <Text>Envoyer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;
