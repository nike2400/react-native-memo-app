import { View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import CircleButton from '../components/CircleButton';
import firebase from '../services/firebase';
import { getFirestore, collection, addDoc, } from 'firebase/firestore'

export default MemoCreateScreen = (props) => {
  const { navigation } = props;
  const db = getFirestore(firebase);

  const handlePress = () => {
    const ref = collection(db, 'memos');
    addDoc(ref, {
      bodyText: 'hello',
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
        <TextInput placeholder='Enter your task'
          multiline style={styles.input}></TextInput>
      </View>
      <CircleButton iconType="✔️" onPress={handlePress}></CircleButton>
    </KeyboardAvoidingView >
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