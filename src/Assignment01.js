import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function NameIn({navigation}) {
  return (
    <SafeAreaView>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Full Name"
        autoCapitalize="none"
        onChangeText={this.handleHeight}
      />
      <Text>Enter Email:</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Personal Email"
        autoCapitalize="none"
        onChangeText={this.Name1}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('Home2')}>
        <Text style={styles.submitButtonText}> Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
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
});
