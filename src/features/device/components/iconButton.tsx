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
  ActivityIndicator,
} from 'react-native';

type IconButtonProps = {
  icon: any;
  text: string | null;
  iconColor?: string;
  textColor?: string;
  showLoader?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
};

const IconButton = ({
  icon,
  text,
  iconColor = '#000000',
  textColor = '#000000',
  showLoader = false,
  style,
  onPress,
}: IconButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        {showLoader ? (
          <ActivityIndicator color={iconColor} size="large" />
        ) : (
          <Image source={icon} style={[styles.icon, {tintColor: iconColor}]} />
        )}
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
