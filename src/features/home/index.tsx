import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {MainNavigationParamList} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';
import Colors from '../../colors';
import HostInput from './containers/hostInput';

type DeviceScreenProps = StackScreenProps<MainNavigationParamList, 'Home'>;

const HomeScreen = ({navigation}: DeviceScreenProps) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primaryDark}
      />
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../../assets/images/home-assistant.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Home Automation</Text>
        <Button
          color={Colors.primary}
          title="  Open Device  "
          onPress={() => navigation.navigate('Device', {id: 'd1c0bfb2d'})}
        />
        <HostInput />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    tintColor: Colors.primary,
    height: 120,
    width: 120,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'stretch', // This is to avoid a rendering problem on some devices. See https://github.com/facebook/react-native/issues/21729
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 32,
  },
});

export default HomeScreen;
