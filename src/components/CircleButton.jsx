import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default CircleButton = (props) => {
  const { iconType, customStyle, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, customStyle]} onPress={onPress}>
      <Text style={styles.circleButtonLebel}>{iconType}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467DF3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // ShadowはiOSのみ対応
    shadowColor: '#000000',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // Androidのみ対応
    elevation: 8,
  },
  circleButtonLebel: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  }
});