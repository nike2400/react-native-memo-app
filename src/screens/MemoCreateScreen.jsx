import { View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import CircleButton from '../components/CircleButton';
import firebase from '../services/firebase';
import { getFirestore, collection, addDoc, } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

export default MemoCreateScreen = (props) => {
  const { navigation } = props;
  const [memoText, setMemoText] = useState('');

  const db = getFirestore(firebase);
  const { currentUser } = getAuth(firebase);
  const handlePress = async () => {
    const ref = collection(db, `users/${currentUser.uid}/memos`);
    await addDoc(ref, {
      bodyText: memoText,
      updatedAt: new Date(),
    }).then((docRef) => {
      console.log('Created', docRef.id);
      navigation.goBack();
    }).catch((error) => {
      console.log(error.code, error.message);
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your task' value={memoText}
          autoFocus
          multiline style={styles.input}
          onChangeText={(value) => { setMemoText(value) }}></TextInput>
      </View>
      <CircleButton iconType="✔️" onPress={handlePress}></CircleButton>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1
  },
  input: {
    flex: 1,
    // multilineの挙動調整
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
});