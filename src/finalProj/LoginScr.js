import React, {useState} from 'react';
import {SafeAreaView, Text, Button, TextInput} from 'react-native';

export default function LoginScr() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <Text> Username:</Text>
      <TextInput onChangeText={val => setUsername(val)} />
      <Text> Password:</Text>
      <TextInput onChangeText={val => setPassword(val)} />
    </SafeAreaView>
  );
}
