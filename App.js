import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {globalStyles} from './styles/global';

export default function App() {
  const [bmiWeight, setWeight] = useState('');
  const [bmiHeight, setHeight] = useState('');
  var calBMI;
  parseFloat;
  var numWeight = Number.parseFloat(bmiWeight);
  var numHeight = Number.parseFloat(bmiHeight);
  var displayTxt = '';
  calBMI = numWeight / ((numHeight / 100) * (numHeight / 100));
  calBMI = parseFloat(calBMI.toFixed(2));
  if (calBMI > 25.0) {
    displayTxt = 'You are OverWeight!';
  } else if (calBMI < 18.5) {
    displayTxt = 'You are UnderWeight';
  } else {
    displayTxt = 'You are Normal Weight';
  }
  var calBMIStrg = calBMI.toString();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Input Your Weight:</Text>
      <TextInput
        mulitiline
        style={globalStyles.input}
        placeholder="Enter Weight in Kilograms"
        onChangeText={val => setWeight(val)}
      />

      <Text style={globalStyles.titleText}> Input Your Height:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Enter Height in centi-meters"
        onChangeText={val => setHeight(val)}
      />
      <Button
        title="Calculate BMI"
        onPress={() =>
          Alert.alert('Your BMI is: ' + calBMIStrg + '\n' + displayTxt)
        }
      />
    </View>
  );
}
