import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDevice} from './deviceSlice';
import {RootState} from 'src/rootReducer';
import ErrorState from './components/errorState';
import LoadingState from './components/loadingState';
import DeviceDetails from './components/deviceDetails';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigationParamList} from 'src/types';

// FIXME use correct types
type DeviceScreenProps = StackScreenProps<MainNavigationParamList, 'Device'>;

const DevicePage = ({route, navigation}: DeviceScreenProps) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => {
    const {isLoading, error} = state.device;
    const {name} = state.device.details || {};

    return {isLoading, error, name};
  });
  const {isLoading, error, name} = status;

  useEffect(() => {
    dispatch(fetchDevice(id));
  }, [id, dispatch]);

  if (name != null) {
    navigation.setOptions({title: name});
  }

  // TODO add empty state
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState
            text={error}
            onRetryPress={() => dispatch(fetchDevice(id))}
          />
        ) : (
          <DeviceDetails />
        )}
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
