import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import FlatButton from './flatButton';
import Colors from '../../../colors';

interface RenameActionEvent {
  value: string;
}

type RenameModalProps = {
  isVisible: boolean;
  loading?: boolean;
  initialValue?: string | null;
  onAction: (event: RenameActionEvent) => void;
  onCancel: () => void;
};

const RenameModal = ({
  isVisible,
  loading = false,
  initialValue,
  onAction,
  onCancel,
}: RenameModalProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  return (
    <Modal
      useNativeDriver
      isVisible={isVisible}
      onBackdropPress={onCancel}
      onBackButtonPress={onCancel}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Rename device</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
        </View>
        <View style={styles.buttons}>
          <FlatButton
            title="Cancel"
            onPress={onCancel}
            style={[styles.button, styles.cancel]}
          />
          {loading ? (
            <View style={styles.button}>
              <ActivityIndicator size="small" color="#4500c6" />
            </View>
          ) : (
            <FlatButton
              title="Change"
              onPress={() => onAction({value})}
              style={[styles.button, styles.action]}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderRadius: 4,
  },
  content: {
    padding: 16,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 44,
    borderColor: Colors.separator,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    height: 56,
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'normal',
  },
  cancel: {
    color: Colors.error,
  },
  action: {
    color: Colors.primary,
  },
});

export default RenameModal;
