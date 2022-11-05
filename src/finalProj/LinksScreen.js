import React from 'react';
import {Button, SafeAreaView, navigation, Text} from 'react-native';
import styles from './styles/FinalProjStyles';

export default function LinksScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.txtTopic}> Manusath Foreign Employment</Text>
      <Button
        title="New Passenger"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title=" Passenger" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
}
