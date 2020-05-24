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

type DeviceScreenProps = StackScreenProps<MainNavigationParamList, 'Device'>;

const DevicePage = ({route, navigation}: DeviceScreenProps) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.device.isLoading);
  const error = useSelector((state: RootState) => state.device.error);
  const name = useSelector(
    (state: RootState) => state.device.details?.name || null,
  );

  useEffect(() => {
    dispatch(fetchDevice(id));
  }, [id, dispatch]);

  if (name != null && name.length > 0) {
    navigation.setOptions({title: name});
  } else {
    navigation.setOptions({title: id});
  }

  // TODO add empty state
  return (
    <>
      <StatusBar barStyle="light-content" />
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