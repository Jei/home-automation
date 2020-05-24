import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {MainNavigationParamList} from 'src/types';
import {StackScreenProps} from '@react-navigation/stack';

type DeviceScreenProps = StackScreenProps<MainNavigationParamList, 'Home'>;

const HomeScreen = ({navigation}: DeviceScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Device Manager</Text>
      <Button
        color="#4500c6"
        title="Open Device"
        onPress={() => navigation.navigate('Device', {id: 'd1c0bfb2d'})}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 24,
    color: '#4500c6',
  },
});

export default HomeScreen;
