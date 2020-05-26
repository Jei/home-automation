import React, {useState} from 'react';
import TextInputModal from '../../../components/textInputModal';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../rootReducer';
import {setHost} from '../homeSlice';
import FlatButton from '../../../components/flatButton';
import Colors from '../../../colors';
import {StyleSheet} from 'react-native';

const HostInput = () => {
  const host = useSelector((state: RootState) => state.home.host);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <TextInputModal
        title="Set host"
        initialValue={host}
        isVisible={modalOpen}
        onAction={({value}) => {
          dispatch(setHost(value));
          setModalOpen(false);
        }}
        onCancel={() => {
          setModalOpen(false);
        }}
      />
      <FlatButton
        title=" Set current host "
        style={styles.button}
        onPress={() => setModalOpen(true)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    color: Colors.primary,
    fontSize: 16,
    bottom: 0,
    position: 'absolute',
  },
});

export default HostInput;
