import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import DeviceDetails from './containers/deviceDetails';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigationParamList} from '../../types';
import Colors from '../../colors';

type DeviceScreenProps = StackScreenProps<MainNavigationParamList, 'Device'>;

const DevicePage = ({route, navigation}: DeviceScreenProps) => {
  const {id} = route.params;

  // TODO add empty state
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primaryDark}
      />
      <SafeAreaView style={styles.container}>
        <DeviceDetails
          id={id}
          onNameChanged={(value) => {
            // Set the title in the action bar every time it's changed.
            // Passing the navigation props to DeviceDetails would be overkill.
            if (value != null && value.length > 0) {
              navigation.setOptions({title: value});
            } else {
              navigation.setOptions({title: id});
            }
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DevicePage;
