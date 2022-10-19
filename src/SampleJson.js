/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const reactJson = {
  name: 'Shanilka',
  age: 25,
  address: 'Galle',
  isAdullt: true,
  food: ['rice', 'curry', 'fish'],
};

const numberArray = [1, 2, 3, 4];
const stringArray = ['Sneha', 'Melissa', 'Madhura'];
const objectArray = [
  {
    name: 'Sneha',
    age: 10,
  },
  {
    age: 8,
    name: 'Melissa',
    address: 'Ragama',
  },
  {
    name: 'Madhura',
    age: 40,
  },
];

const SampleJson = () => {
  useEffect(() => {
    console.log('Print numberArray', numberArray);
    console.log('Print stringArray', stringArray);
    console.log('Print objectArray', objectArray);
    console.log('String Array Element 0', objectArray[0]);
    console.log('String array Element 1', objectArray[1]);
    console.log('String Array Element 2', objectArray[2].age);
    console.log('Print reactJson', reactJson.food[1]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Array types and examples</Text>
      <Text style={styles.label}>Number Array</Text>
      <Text style={styles.label}>String Array</Text>
      <Text style={styles.label}>Object Array</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  label: {
    marginLeft: 15,
  },
});

export default SampleJson;
