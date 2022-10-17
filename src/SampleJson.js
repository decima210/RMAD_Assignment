import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const reactJson  = {
    name: 'Shanilka',
    age: 25,
    address:'Galle',
    isAdullt: true,
};

const SampleJson = () => {
const [counter, setCounter] = useState(0);
return(
    <View style={styles.container}>
        <Text style={styles.title}>This is home Functional component</Text>
        <Text style={styles.title}>{'count is ${counter}'} </Text>

        <TouchableOpacity
        onPress={()=>setCounter(counter+1)}
        style={styles.btn}>
            <Text style={styles.title}>Add +1 to count</Text>
        </TouchableOpacity>
        </View>

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    // fontWeight:"bold",
    fontSize: 18,
  },
  output: {
    textAlign: 'center',
    fontSize: 30,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 30,
    color: 'blue',
  },
  label: {
    marginLeft: 15,
  },
});