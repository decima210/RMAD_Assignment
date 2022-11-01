import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './FinalProjStyles';
import img1 from './Pictures/2.jpg';

export default function LoginScr() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.abc}>
      <Text style={styles.title}>WELCOME!</Text>
      <Image source={img1} style={styles.img} />
      <Text style={styles.h1}>Manusath Foreign</Text>
      <Text style={styles.h1}>Employment Agency</Text>
      <Text style={styles.txtGeneral}> Username:</Text>
      <TextInput
        style={styles.txtInputStyle}
        placeholder="Enter Username"
        onChangeText={newText => setUsername(userName)}
        defaultValue={userName}
      />
      <Text style={styles.txtGeneral}> Password:</Text>
      <TextInput
        style={styles.txtInputStyle}
        placeholder="Enter Password"
        onChangeText={newText => setPassword(password)}
        defaultValue={password}
      />
      <TouchableOpacity onPress={() => this.onButtonPress()} style={styles.btn}>
        <Text style={styles.btnTitle}> Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onButtonPress()} style={styles.btn}>
        <Text style={styles.btnTitle}> Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
