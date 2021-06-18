import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';

import styles from './ProfileScreen.styles';
import {useDispatch, useSelector} from 'react-redux';

const ProfileScreen = () => {
  const {firstName, lastName, profilePicturePath} = useSelector(
    s => s.userData,
  );
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch({type: 'logout'});
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Image
        style={styles.image}
        source={
          !profilePicturePath
            ? require('../../../assets/no-profile-picture.png')
            : {
                uri: profilePicturePath,
              }
        }
      />
      <Text style={styles.text}>Bonjour {firstName + ' ' + lastName}</Text>
      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text>Se déconnecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
