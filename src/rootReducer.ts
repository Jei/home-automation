import {combineReducers} from '@reduxjs/toolkit';
import deviceReducer from './features/device/deviceSlice';

const rootReducer = combineReducers({
  device: deviceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
