import {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import React from 'react';

export default function nameIn() {
  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [name, setName] = useState('Shaun');

  return (
    <view style={Styles.container}>
      <Text> Enter Name:</Text>
      <Text>Name:{name}</Text>
    </view>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
