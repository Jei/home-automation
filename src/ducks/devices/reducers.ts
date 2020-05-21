import {Reducer, combineReducers} from 'redux';
import {
  DeviceState,
  FETCH_DEVICE_ERROR,
  RENAME_ERROR,
  SET_FAN_ERROR,
  SET_LIGHT_ERROR,
  SET_ALL_ERROR,
  ErrorAction,
  SuccessAction,
  FETCH_DEVICE_SUCCESS,
  RENAME_SUCCESS,
  SET_FAN_SUCCESS,
  SET_LIGHT_SUCCESS,
  SET_ALL_SUCCESS,
  StartAction,
  FETCH_DEVICE_START,
  RENAME_START,
  SET_FAN_START,
  SET_LIGHT_START,
  SET_ALL_START,
} from './types';

// FIXME should I move this elsewhere?
const initialState: DeviceState = {
  device: null,
  loading: true,
  loadingFan: false,
  loadingLight: false,
  loadingName: false,
  error: null,
};

const startReducer: Reducer<DeviceState, StartAction> = (
  state = initialState,
  action: StartAction,
) => {
  switch (action.type) {
    case FETCH_DEVICE_START:
      return {
        ...state,
        loading: true,
      };
    case RENAME_START:
      return {
        ...state,
        loadingName: true,
      };
    case SET_FAN_START:
      return {
        ...state,
        loadingFan: true,
      };
    case SET_LIGHT_START:
      return {
        ...state,
        loadingLight: true,
      };
    case SET_ALL_START:
      return {
        ...state,
        loadingFan: true,
        loadingLight: true,
      };
    default:
      return state;
  }
};

const successReducer: Reducer<DeviceState, SuccessAction<any>> = (
  state = initialState,
  action: SuccessAction<any>,
) => {
  // FIXME improve readability
  switch (action.type) {
    case FETCH_DEVICE_SUCCESS:
      return {
        ...initialState,
        device: action.response,
      };
    case RENAME_SUCCESS:
      return {
        ...state,
        device: {
          ...state.device,
          ...action.response,
        },
        loadingName: false,
      };
    case SET_FAN_SUCCESS:
      return {
        ...state,
        device: {
          ...state.device,
          ...action.response,
        },
        loadingFan: false,
      };
    case SET_LIGHT_SUCCESS:
      return {
        ...state,
        device: {
          ...state.device,
          ...action.response,
        },
        loadingLight: false,
      };
    case SET_ALL_SUCCESS:
      return {
        ...state,
        device: {
          ...state.device,
          ...action.response,
        },
        loadingFan: false,
        loadingLight: false,
      };
    default:
      return state;
  }
};

const errorReducer: Reducer<DeviceState, ErrorAction> = (
  state = initialState,
  action: ErrorAction,
) => {
  switch (action.type) {
    case FETCH_DEVICE_ERROR:
    case RENAME_ERROR:
    case SET_FAN_ERROR:
    case SET_LIGHT_ERROR:
    case SET_ALL_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

const deviceReducers = combineReducers([
  startReducer,
  successReducer,
  errorReducer,
]);

export default deviceReducers;
