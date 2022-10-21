import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

export default class PracticeConditions extends Component {
  constructor() {
    super();
    this.state = {
      counter: 10,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <Text>{this.state.counter}</Text>
      </SafeAreaView>
    );
  }
}
