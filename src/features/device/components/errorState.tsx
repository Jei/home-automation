import React from 'react';
import {Text, StyleSheet, View, GestureResponderEvent} from 'react-native';
import FlatButton from '../../../components/flatButton';
import Colors from '../../../colors';

type ErrorStateProps = {
  text: string;
  onRetryPress: (event: GestureResponderEvent) => void;
};

const ErrorState = ({text, onRetryPress}: ErrorStateProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <FlatButton
        title=" Retry "
        style={styles.button}
        onPress={onRetryPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    margin: 8,
  },
  button: {
    margin: 8,
    height: 52,
    fontSize: 18,
    color: Colors.primary,
  },
});

export default ErrorState;
