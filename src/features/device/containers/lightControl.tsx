import React from 'react';
import ApplianceCard from '../components/applianceCard';
import {RootState} from '../../../rootReducer';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {toggleLight} from '../deviceSlice';

const LightControl = () => {
  const details = useSelector((state: RootState) => {
    const {isLoadingLight} = state.device;
    const {light} = state.device.details || {};

    return {
      isLoadingLight,
      light,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  return (
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
  );
};

export default LightControl;
