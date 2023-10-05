import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Hello = () => {
  return (
    <View>
      <Text style={styles.text}>Hello React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
});

export default Hello;