import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const LoadingState = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#0000ff" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingState;
