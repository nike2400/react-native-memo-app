import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default LogOutButton = (props) => {
  const { label, onPress } = props
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  buttonLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)'
  },
});