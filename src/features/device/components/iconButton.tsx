import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
} from 'react-native';

type IconButtonProps = {
  icon: any;
  text: string | null;
  iconColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
};

const IconButton = ({
  icon,
  text,
  iconColor = '#000000',
  textColor = '#000000',
  style,
  onPress,
}: IconButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={icon} style={[styles.icon, {tintColor: iconColor}]} />
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {},
  text: {},
});

export default IconButton;
