import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default MemoCreateScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <AppBar></AppBar>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your task'
          multiline style={styles.input}></TextInput>
      </View>
      <CircleButton iconType="✔️" onPress={() => { Alert.alert('Alert') }}></CircleButton>
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