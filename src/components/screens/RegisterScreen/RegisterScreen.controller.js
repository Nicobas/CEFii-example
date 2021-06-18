import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';

const useController = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(true);

  const [profilePicture, setProfilePicture] = useState(null);

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

    const action = {
      type: 'login',
      data: {
        firstName,
        lastName,
        profilePicturePath: profilePicture && profilePicture.path,
      },
    };
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

  const selectProfilePicture = useCallback(async () => {
    const statuses = await requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ]);

    const statusesArray = Object.entries(statuses).map(o => o[1]);

    if (!statusesArray.every(o => o === RESULTS.GRANTED)) {
      return;
    }

    // Mes permissions sont ok

    Alert.alert('Choisir une image depuis', undefined, [
      {
        text: 'Annuler',
        //onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Caméra',
        onPress: async () => {
          const image = await ImagePicker.openCamera({
            width: 500,
            height: 500,
            cropping: true,
            cropperCircleOverlay: true,
            useFrontCamera: true,
          });

          if (image) {
            setProfilePicture(image);
          }
        },
      },
      {
        text: 'Gallerie',
        onPress: async () => {
          const image = await ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: true,
            cropperCircleOverlay: true,
          });

          if (image) {
            setProfilePicture(image);
          }
        },
      },
    ]);
  }, []);

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
    selectProfilePicture,
    profilePicture,
  };
};

export default useController;
