import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import IconButton from './iconButton';
import ApplianceCard from './applianceCard';
import FlatButton from './flatButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/rootReducer';
import {toggleLight, toggleFan, setAll} from '../deviceSlice';

const DeviceDetails = () => {
  const appliances = useSelector((state: RootState) => {
    const {isLoadingFan, isLoadingLight} = state.device;
    const {fan, light} = state.device.details || {};

    return {
      isLoadingFan,
      isLoadingLight,
      fan,
      light,
    };
  });

  const dispatch = useDispatch();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.controls}>
        <View style={styles.controlsSection}>
          <IconButton
            icon=""
            text="Schedules"
            onPress={() => {}}
            style={styles.controlButton}
            iconColor={'#0000ff'}
          />
          <IconButton
            icon=""
            text="Timers"
            onPress={() => {}}
            style={styles.controlButton}
            iconColor={'#0000ff'}
          />
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.controlsSection}>
          <IconButton
            icon=""
            text="All ON"
            onPress={() => {
              dispatch(setAll(true));
            }}
            style={styles.controlButton}
            iconColor={'#00ff00'}
          />
          <IconButton
            icon=""
            text="All OFF"
            onPress={() => {
              dispatch(setAll(false));
            }}
            style={styles.controlButton}
            iconColor={'#ff0000'}
          />
        </View>
      </View>
      <View style={styles.appliances}>
        <ApplianceCard
          icon=""
          title="Light"
          status={appliances.light}
          isLoading={appliances.isLoadingLight}
          onPress={() => {
            dispatch(toggleLight());
          }}
          onEditPress={() => {}}
        />
        <ApplianceCard
          icon=""
          title="Fan"
          status={appliances.fan}
          isLoading={appliances.isLoadingFan}
          onPress={() => {
            dispatch(toggleFan());
          }}
          onEditPress={() => {}}
        />
      </View>
      <View style={styles.options}>
        <FlatButton
          title="Rename Device"
          onPress={() => {}}
          style={styles.optionButton}
        />
        <View style={styles.horizontalSeparator} />
        <FlatButton
          title="Find Me"
          onPress={() => {}}
          style={styles.optionButton}
        />
        <View style={styles.horizontalSeparator} />
        <FlatButton
          title="Reboot"
          onPress={() => {}}
          style={styles.optionButton}
        />
        <View style={styles.horizontalSeparator} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  controls: {
    height: 88,
    alignItems: 'stretch',
    flexDirection: 'row',
    paddingVertical: 8,
  },
  controlsSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: '#dddddd',
  },
  controlButton: {
    flex: 0.4,
  },
  appliances: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 8,
  },
  horizontalSeparator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  options: {
    alignItems: 'stretch',
    marginHorizontal: 16,
  },
  optionButton: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    height: 56,
  },
});

export default DeviceDetails;
