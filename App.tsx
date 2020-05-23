/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import DevicePage from './src/features/device';

import {Provider} from 'react-redux';

import store from './src/store';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <DevicePage />
    </Provider>
  );
};

export default App;
