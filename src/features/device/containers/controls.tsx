import React from 'react';
import IconButton from '../../../components/iconButton';
import {setAll} from '../deviceSlice';
import Colors from '../../../colors';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

const Controls = () => {
  const dispatch = useDispatch();

  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default Controls;
