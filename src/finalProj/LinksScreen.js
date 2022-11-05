import React from 'react';
import {
  Button,
  SafeAreaView,
  navigation,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/FinalProjStyles';
import {NavigationRouts} from './enum';

export default function LinksScreen({navigation}) {
  return (
    <SafeAreaView>
      <Text style={styles.txtTopic}> Manusath Foreign Employment</Text>
      <TouchableOpacity
        title="New Passenger"
        onPress={() => navigation.navigate(NavigationRouts.LinksScreen)}>
        <Text style={styles.txtGeneral}> Go to LinksScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
