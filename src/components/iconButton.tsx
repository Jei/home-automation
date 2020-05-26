import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
  ImageSourcePropType,
} from 'react-native';
import Colors from '../colors';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

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
  iconColor = Colors.text,
  textColor = Colors.text,
  textSize = 14,
  showLoader = false,
  style,
  onPress,
}: IconButtonProps) => {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      style={[styles.touchable, style]}
      containerStyle={styles.container}>
      {showLoader ? (
        <ActivityIndicator color={iconColor} size="large" />
      ) : (
        <Image source={icon} style={[styles.icon, {tintColor: iconColor}]} />
      )}
      <Text
        style={[styles.text, {color: textColor, fontSize: textSize}]}
        numberOfLines={1}>
        {text}
      </Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  icon: {
    height: 40,
    width: 40,
  },
  text: {},
});

export default IconButton;
