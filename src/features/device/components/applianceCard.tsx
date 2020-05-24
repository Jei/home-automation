import React from 'react';
import {StyleSheet, View, GestureResponderEvent} from 'react-native';
import IconButton from './iconButton';
import FlatButton from './flatButton';

type ApplianceCardProps = {
  icon: string;
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
      backgroundColor: status ? '#ff0000' : '#ffffff',
    },
  ];
  const color = status ? '#ffffff' : '#ff0000';
  return (
    <View style={styles.container}>
      <IconButton
        icon={icon}
        text={title}
        onPress={onPress}
        style={buttonStyle}
        showLoader={isLoading}
        iconColor={color}
        textColor={color}
      />
      <FlatButton title="Edit" onPress={onEditPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    margin: 8,
  },
  action: {
    height: 120,
    width: 100,
    borderRadius: 8,
    elevation: 2,
    padding: 8,
  },
});

export default ApplianceCard;
