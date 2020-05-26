import React from 'react';
import {
  Text,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type FlatButtonProps = {
  title: string | null;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
};

const FlatButton = ({title, style, onPress}: FlatButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.title, style]} numberOfLines={1}>
        {`  ${title}  `}
      </Text>
    </TouchableOpacity>
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
