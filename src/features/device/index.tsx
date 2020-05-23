import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import ApplianceCard from './components/applianceCard';
import IconButton from './components/iconButton';
import FlatButton from './components/flatButton';

const DevicePage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default DevicePage;
