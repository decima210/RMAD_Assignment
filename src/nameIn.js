import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function NameIn({navigation}) {
  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [name, setName] = useState('Shaun');

  return (
    <View style={Styles.container}>
      <Text> Enter Name:</Text>
      <Text>Name:{name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
        <Text>Hello World</Text>
      </TouchableOpacity>
    </View>
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
