import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import IconButton from './iconButton';
import ApplianceCard from './applianceCard';
import FlatButton from './flatButton';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {RootState} from 'src/rootReducer';
import {toggleLight, toggleFan, setAll, setName} from '../deviceSlice';
import RenameModal from './renameModal';
import Colors from '../../../colors';

const DeviceDetails = () => {
  const details = useSelector((state: RootState) => {
    const {isLoadingFan, isLoadingLight, isLoadingName} = state.device;
    const {fan, light, name} = state.device.details || {};

    return {
      isLoadingFan,
      isLoadingLight,
      isLoadingName,
      fan,
      light,
      name,
    };
  }, shallowEqual);
  const [renaming, setRenaming] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (details.isLoadingName === false) {
      setRenaming(false);
    }
  }, [details.isLoadingName]);

  return (
    <>
      <RenameModal
        isVisible={renaming}
        loading={details.isLoadingName}
        initialValue={details.name}
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
        <View style={styles.controls}>
          <View style={styles.controlsSection}>
            <IconButton
              icon={require('../../../../assets/images/schedules.png')}
              text="Schedules"
              onPress={() => {}}
              style={styles.controlButton}
              iconColor={Colors.primary}
            />
            <IconButton
              icon={require('../../../../assets/images/timers.png')}
              text="Timers"
              onPress={() => {}}
              style={styles.controlButton}
              iconColor={Colors.primary}
            />
          </View>
          <View style={styles.verticalSeparator} />
          <View style={styles.controlsSection}>
            <IconButton
              icon={require('../../../../assets/images/on-off.png')}
              text="All ON"
              onPress={() => {
                dispatch(setAll(true));
              }}
              style={styles.controlButton}
              iconColor={Colors.success}
            />
            <IconButton
              icon={require('../../../../assets/images/on-off.png')}
              text="All OFF"
              onPress={() => {
                dispatch(setAll(false));
              }}
              style={styles.controlButton}
              iconColor={Colors.error}
            />
          </View>
        </View>
        <View style={styles.appliances}>
          <ApplianceCard
            icon={require('../../../../assets/images/light.png')}
            title="Light"
            status={details.light}
            isLoading={details.isLoadingLight}
            onPress={() => {
              dispatch(toggleLight());
            }}
            onEditPress={() => {}}
          />
          <ApplianceCard
            icon={require('../../../../assets/images/fan.png')}
            title="Fan"
            status={details.fan}
            isLoading={details.isLoadingFan}
            onPress={() => {
              dispatch(toggleFan());
            }}
            onEditPress={() => {}}
          />
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
  controls: {
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  controlsSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: Colors.separator,
  },
  controlButton: {
    flex: 0.4,
    height: 72,
    marginVertical: 12,
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
