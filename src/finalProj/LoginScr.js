import React, {useState} from 'react';
import {SafeAreaView, Text, Button, TextInput} from 'react-native';
import styles from './FinalProjStyles';

export default function LoginScr() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.abc}>
      <Text> Username:</Text>
      <TextInput
        style={styles.txtInputStyle}
        placeholder="Enter Username"
        onChangeText={newText => setUsername(userName)}
        defaultValue={userName}
      />
      <Text> Password:</Text>
      <TextInput onChangeText={val => setPassword(val)} />
    </SafeAreaView>
  );
}
