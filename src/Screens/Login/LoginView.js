import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TABNAVIGATOR} from '../../routers/ScreenNames';
const LoginView = props => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>Login screen</Text>
      <TouchableOpacity onPress={() => navigate.navigate(TABNAVIGATOR)}>
        <Text>GO to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
