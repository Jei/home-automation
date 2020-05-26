import React from 'react';
import ApplianceCard from '../components/applianceCard';
import {RootState} from '../../../rootReducer';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {toggleFan} from '../deviceSlice';

const FanControl = () => {
  const details = useSelector((state: RootState) => {
    const {isLoadingFan} = state.device;
    const {fan} = state.device.details || {};

    return {
      isLoadingFan,
      fan,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  return (
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
  );
};

export default FanControl;
