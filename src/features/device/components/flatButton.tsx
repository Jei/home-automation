import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

type FlatButtonProps = {
  title: string | null;
  withFeedback?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
};

const FlatButton = ({
  title,
  style,
  withFeedback = false,
  onPress,
}: FlatButtonProps) => {
  if (withFeedback) {
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <Text style={[styles.title, style]}>{title}</Text>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={[styles.title, style]}>{title}</Text>
      </TouchableWithoutFeedback>
    );
  }
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
