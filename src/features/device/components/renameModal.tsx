import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import FlatButton from './flatButton';

interface RenameActionEvent {
  value: string;
}

type RenameModalProps = {
  isVisible: boolean;
  loading?: boolean;
  onAction: (event: RenameActionEvent) => void;
  onCancel: () => void;
};

const RenameModal = ({
  isVisible,
  loading = false,
  onAction,
  onCancel,
}: RenameModalProps) => {
  const [value, setValue] = useState('');

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
    backgroundColor: '#ffffff',
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
    borderColor: '#dddddd',
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
    color: '#ff0000',
  },
  action: {
    color: '#4500c6',
  },
});

export default RenameModal;
