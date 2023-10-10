import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Button from '../components/Button';
import firebase from '../services/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default LogInScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(firebase);

  const handlePress = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      }).catch((error) => {
        Alert.alert("入力値が不正です");
        console.log(error.code, error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput textContentType='emailAddress' keyboardType='email-address' autoCapitalize='none' style={styles.input} placeholder='Email' value={email} onChangeText={(value) => { setEmail(value) }}></TextInput>
        <TextInput textContentType='password' secureTextEntry autoCapitalize='none' style={styles.input} placeholder='Password' value={password} onChangeText={(value) => { setPassword(value) }}></TextInput>
        <Button label="Submit" onPress={handlePress}></Button>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'SignUp' }],
            });
          }}>
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    // lineHeight: 32,
    height: 48,
    backgroundColor: '#ffffff',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerContainer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});