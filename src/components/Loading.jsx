import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loading = (props) => {
  const { isLoading } = props;
  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <ActivityIndicator size="learge" color="#000000"></ActivityIndicator>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    buttom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.7)',
    zIndex: 0,
  },
  inner: {
    marginBottom: 80,
  }
});

export default Loading;