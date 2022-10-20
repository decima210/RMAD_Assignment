import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './CodePracticeStyles';

export default class CodePractice extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  onButtonPress() {
    this.setState({counter: this.state.counter + 1});
  }
  render() {
    return (
      <View style={styles.abc}>
        <Text> Count: {this.state.counter} </Text>
        <TouchableOpacity onPress={this.onButtonPress()} style={styles.btn}>
          <Text style={styles.btnTitle}> + Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
