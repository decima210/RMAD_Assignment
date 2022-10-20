import React, {Component} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import styles from './CodePracticeStyles';

export default class CodePractice extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <View style={styles.abc}>
        <SafeAreaView>
          <Text> {this.state.counter}</Text>
          <TouchableOpacity style={styles.btn} />
        </SafeAreaView>
      </View>
    );
  }
}
