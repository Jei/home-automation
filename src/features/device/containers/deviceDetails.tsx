import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import IconButton from '../components/iconButton';
import ApplianceCard from '../components/applianceCard';
import FlatButton from '../components/flatButton';

const DeviceDetails = () => {
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
            onPress={() => {}}
            style={styles.controlButton}
            iconColor={'#00ff00'}
          />
          <IconButton
            icon=""
            text="All OFF"
            onPress={() => {}}
            style={styles.controlButton}
            iconColor={'#ff0000'}
          />
        </View>
      </View>
      <View style={styles.appliances}>
        <ApplianceCard
          icon=""
          title="Light"
          onPress={() => {}}
          onEditPress={() => {}}
        />
        <ApplianceCard
          icon=""
          title="Fan"
          onPress={() => {}}
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
