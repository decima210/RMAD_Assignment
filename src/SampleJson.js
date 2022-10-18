import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const reactJson = {
  name: 'Shanilka',
  age: 25,
  address: 'Galle',
  isAdullt: true,
};

const numberArray = [1, 2, 3, 4];
const stringArray = ['Sneha', 'Melissa', 'Madhura'];
const objectArray = [
  {
    name: 'Sneha',
    age: 10,
  },
  {
    name: 'Melissa',
    age: 8,
  },
  {
    name: 'Madhura',
    age: 40,
  },
];

const SampleJson = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Print numberArray', numberArray);
    console.log('Print stringArray', stringArray);
    console.log('Print objectArray', objectArray);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is home Functional component</Text>
      <Text style={styles.title}>{'count is ${counter}'} </Text>

      <TouchableOpacity
        onPress={() => setCounter(counter + 1)}
        style={styles.btn}>
        <Text style={styles.title}>Add +1 to count</Text>
      </TouchableOpacity>
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
