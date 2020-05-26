import {combineReducers} from '@reduxjs/toolkit';
import deviceReducer from './features/device/deviceSlice';
import homeReducer from './features/home/homeSlice';

const rootReducer = combineReducers({
  device: deviceReducer,
  home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
