import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import IconButton from './iconButton';
import ApplianceCard from './applianceCard';
import FlatButton from './flatButton';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {RootState} from 'src/rootReducer';
import {toggleLight, toggleFan, setAll, setName} from '../deviceSlice';
import RenameModal from './renameModal';

const DeviceDetails = () => {
  const details = useSelector((state: RootState) => {
    const {isLoadingFan, isLoadingLight, isLoadingName} = state.device;
    const {fan, light} = state.device.details || {};

    return {
      isLoadingFan,
      isLoadingLight,
      isLoadingName,
      fan,
      light,
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
        onAction={({value}) => {
          dispatch(setName(value));
        }}
        onCancel={() => {
          setRenaming(false);
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.controls}>
          <View style={styles.controlsSection}>
            <IconButton
              icon={require('../../../../assets/images/schedules.png')}
              text="Schedules"
              onPress={() => {}}
              style={styles.controlButton}
              iconColor={'#0000ff'}
            />
            <IconButton
              icon={require('../../../../assets/images/timers.png')}
              text="Timers"
              onPress={() => {}}
              style={styles.controlButton}
              iconColor={'#0000ff'}
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
              iconColor={'#00ff00'}
            />
            <IconButton
              icon={require('../../../../assets/images/on-off.png')}
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
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  controls: {
    marginTop: 8,
    height: 96,
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
    marginVertical: 4,
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
    fontSize: 18,
    textAlign: 'left',
    height: 56,
  },
});

export default DeviceDetails;
