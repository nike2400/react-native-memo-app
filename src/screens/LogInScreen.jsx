import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

export default LogInScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder='Email'></TextInput>
        <TextInput style={styles.input} placeholder='Password'></TextInput>
        <Button label="Submit" onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'MemoList' }],
          });
        }}></Button>
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