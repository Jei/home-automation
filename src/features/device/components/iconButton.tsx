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
  ImageSourcePropType,
} from 'react-native';

type IconButtonProps = {
  icon: ImageSourcePropType;
  text: string | null;
  iconColor?: string;
  textColor?: string;
  textSize?: number;
  showLoader?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
};

const IconButton = ({
  icon,
  text,
  iconColor = '#000000',
  textColor = '#000000',
  textSize = 14,
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
        <Text style={[styles.text, {color: textColor, fontSize: textSize}]}>
          {text}
        </Text>
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
  icon: {
    height: 40,
    width: 40,
  },
  text: {},
});

export default IconButton;
