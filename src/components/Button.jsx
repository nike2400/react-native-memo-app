import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default Button = (props) => {
  const { label, onPress, customStyle } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, customStyle]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#FFFFFF',
  },
});