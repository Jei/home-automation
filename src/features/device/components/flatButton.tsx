import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';

type FlatButtonProps = {
  title: string | null;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
};

const FlatButton = ({title, style, onPress}: FlatButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={[styles.title, style]}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    height: 44,
  },
});

export default FlatButton;
