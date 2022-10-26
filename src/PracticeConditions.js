import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

export default function PracticeConditions() {
  const [name, setName] = useState('Apple');
  const [number, setNumber] = useState(10);
  const clickHandler = () => {
    if (number > 75) {
      setName('A');
    } else if (number > 50) {
      setName('B');
    } else {
      setName('Fail');
    }
  };

  return (
    <SafeAreaView>
      <Text> Result is: {name}</Text>
      <Button title="Update Number" onPress={clickHandler} />
    </SafeAreaView>
  );
}
