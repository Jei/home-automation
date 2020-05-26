import React from 'react';
import {
  StyleSheet,
  View,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';
import IconButton from './iconButton';
import FlatButton from './flatButton';
import Colors from '../../../colors';

type ApplianceCardProps = {
  icon: ImageSourcePropType;
  title: string | null;
  status?: boolean;
  isLoading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  onEditPress: (event: GestureResponderEvent) => void;
};

const ApplianceCard = ({
  icon,
  title,
  status = false,
  isLoading = false,
  onPress,
  onEditPress,
}: ApplianceCardProps) => {
  const buttonStyle = [
    styles.action,
    {
      backgroundColor: status ? Colors.secondary : Colors.background,
    },
  ];
  const color = status ? Colors.textSecondary : Colors.secondary;
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <IconButton
          icon={icon}
          text={title}
          onPress={onPress}
          style={buttonStyle}
          showLoader={isLoading}
          iconColor={color}
          textColor={color}
          textSize={16}
        />
      </View>
      <FlatButton
        title="Edit"
        onPress={onEditPress}
        style={styles.edit}
        withFeedback
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    borderRadius: 8,
    backgroundColor: Colors.background,
    margin: 8,
    overflow: 'hidden',
  },
  border: {
    height: 120,
    width: 100,
    borderRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  action: {
    padding: 16,
  },
  edit: {
    fontSize: 16,
  },
});

export default ApplianceCard;
