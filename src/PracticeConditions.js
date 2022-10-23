import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const PracticeConditions = () => {
  const counter = 100;
  if (counter > 75) {
    counter = counter + 1;
  }
  return (
    <SafeAreaView>
      <Text>counter:{counter}</Text>
    </SafeAreaView>
  );
};
export default PracticeConditions;
