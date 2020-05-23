import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDevice} from './deviceSlice';
import {RootState} from 'src/rootReducer';
import ErrorState from './components/errorState';
import LoadingState from './components/loadingState';
import DeviceDetails from './containers/deviceDetails';

// FIXME use correct types
type DevicePageProps = {
  id: string;
};

const DevicePage = ({id}: DevicePageProps) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => ({
    isLoading: state.device.isLoading,
    error: state.device.error,
  }));
  const {isLoading, error} = status;

  useEffect(() => {
    dispatch(fetchDevice(id));
  }, [id, dispatch]);

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
