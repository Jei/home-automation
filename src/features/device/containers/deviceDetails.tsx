import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import FlatButton from '../../../components/flatButton';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {RootState} from '../../../rootReducer';
import {setName, fetchDevice} from '../deviceSlice';
import RenameModal from '../components/renameModal';
import Colors from '../../../colors';
import FanControl from './fanControl';
import LightControl from './lightControl';
import Controls from './controls';
import LoadingState from '../components/loadingState';
import ErrorState from '../components/errorState';

type DeviceDetailsProps = {
  id: string;
  onNameChanged: (value: string | null | undefined) => void;
};

const DeviceDetails = ({id, onNameChanged}: DeviceDetailsProps) => {
  const details = useSelector((state: RootState) => {
    const {isLoadingName, isLoading, loadingError} = state.device;

    return {
      isLoading,
      loadingError,
      isLoadingName,
    };
  }, shallowEqual);
  const name = useSelector(
    (state: RootState) => (state.device.details || {}).name,
  );
  const [renaming, setRenaming] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Close the renaming modal when the new name has loaded
    if (details.isLoadingName === false) {
      setRenaming(false);
    }
  }, [details.isLoadingName]);

  useEffect(() => {
    // Fetch the device details when the component is created
    dispatch(fetchDevice(id));
  }, [id, dispatch]);

  useEffect(() => {
    // Signal to parent when the name changes
    onNameChanged(name);
  }, [name, onNameChanged]);

  if (details.isLoading) {
    return <LoadingState />;
  }

  if (details.loadingError) {
    return (
      <ErrorState
        text={details.loadingError}
        onRetryPress={() => dispatch(fetchDevice(id))}
      />
    );
  }

  return (
    <>
      <RenameModal
        isVisible={renaming}
        loading={details.isLoadingName}
        initialValue={name}
        onAction={({value}) => {
          dispatch(setName(value));
        }}
        onCancel={() => {
          setRenaming(false);
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.content}>
        <Controls />
        <View style={styles.appliances}>
          <LightControl />
          <FanControl />
        </View>
        <View style={styles.options}>
          <FlatButton
            title="Rename Device"
            onPress={() => {
              setRenaming(true);
            }}
            style={styles.optionButton}
            withFeedback
          />
          <View style={styles.horizontalSeparator} />
          <FlatButton
            title="Find Me"
            onPress={() => {}}
            style={styles.optionButton}
            withFeedback
          />
          <View style={styles.horizontalSeparator} />
          <FlatButton
            title="Reboot"
            onPress={() => {}}
            style={styles.optionButton}
            withFeedback
          />
          <View style={styles.horizontalSeparator} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.background,
  },
  content: {
    marginVertical: 8,
  },
  appliances: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 8,
  },
  horizontalSeparator: {
    height: 1,
    backgroundColor: Colors.separator,
  },
  options: {
    alignItems: 'stretch',
    marginHorizontal: 16,
  },
  optionButton: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    height: 56,
  },
});

export default DeviceDetails;
