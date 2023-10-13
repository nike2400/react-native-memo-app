
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import CircleButton from '../components/CircleButton';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import firebase from '../services/firebase';
import { doc, getFirestore, setDoc, } from 'firebase/firestore';

export default MemoEditScreen = (props) => {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [memo, setMemo] = useState(bodyText);

  const handlePress = () => {
    const { currentUser } = getAuth(firebase);
    if (currentUser) {
      const db = getFirestore(firebase);
      const ref = doc(db, `users/${currentUser.uid}/memos`, id);
      setDoc(ref, {
        bodyText: bodyText,
        updatedAt: new Date(),
      }, { merge: true }).then(() => {
        navigation.goBack();
      }).catch((error) => {
        console.log(error.code, error.message);
        Alert.alert("メモの更新に失敗しました");
      });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your task'
          style={styles.input}
          value={memo}
          onChangeText={(value) => { setMemo(value); }}
          multiline
        ></TextInput>
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
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
});