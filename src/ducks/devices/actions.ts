import {
  Device,
  DeviceState,
  StartAction,
  SuccessAction,
  ErrorAction,
  FETCH_DEVICE_START,
  FETCH_DEVICE_SUCCESS,
  FETCH_DEVICE_ERROR,
  RENAME_START,
  RENAME_SUCCESS,
  RENAME_ERROR,
  SET_FAN_START,
  SET_FAN_SUCCESS,
  SET_FAN_ERROR,
  SET_LIGHT_START,
  SET_LIGHT_SUCCESS,
  SET_LIGHT_ERROR,
  SET_ALL_START,
  SET_ALL_SUCCESS,
  SET_ALL_ERROR,
} from './types';
import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import api from '../../services/api';

/////////////////////
// Generic actions //
/////////////////////

const patchDeviceAction = (
  attributes: Partial<Device>,
  start: () => StartAction,
  success: (response: Partial<Device>) => SuccessAction<Partial<Device>>,
  error: (err: string) => ErrorAction,
): ThunkAction<void, DeviceState, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  const {device} = getState();

  dispatch(start);

  try {
    await api.patch(`/devices/${device?.id}`, attributes);
    dispatch(success(attributes));
  } catch (err) {
    dispatch(error(err.message));
  }
};

//////////////////////////
// Fetch device actions //
//////////////////////////

const fetchDeviceStart = (): StartAction => ({
  type: FETCH_DEVICE_START,
});

const fetchDeviceSuccess = (device: Device): SuccessAction<Device> => ({
  type: FETCH_DEVICE_SUCCESS,
  response: device,
});

const fetchDeviceError = (error: string): ErrorAction => ({
  type: FETCH_DEVICE_ERROR,
  error,
});

export const fetchDevice = (
  id: string,
): ThunkAction<void, DeviceState, unknown, Action<string>> => async (
  dispatch,
) => {
  dispatch(fetchDeviceStart());

  try {
    const res = await api.get(`/devices/${id}`);
    dispatch(fetchDeviceSuccess(res.data));
  } catch (err) {
    dispatch(fetchDeviceError(err.message));
  }
};

///////////////////////////
// Rename device actions //
///////////////////////////
const renameStart = (): StartAction => ({
  type: RENAME_START,
});

const renameSuccess = ({
  name,
}: Partial<Device>): SuccessAction<Partial<Device>> => ({
  type: RENAME_SUCCESS,
  response: {name},
});

const renameError = (error: string): ErrorAction => ({
  type: RENAME_ERROR,
  error,
});

export const rename = (name: string | null) =>
  patchDeviceAction({name}, renameStart, renameSuccess, renameError);

/////////////////////
// Set fan actions //
/////////////////////
const setFanStart = (): StartAction => ({
  type: SET_FAN_START,
});

const setFanSuccess = ({
  fan,
}: Partial<Device>): SuccessAction<Partial<Device>> => ({
  type: SET_FAN_SUCCESS,
  response: {fan},
});

const setFanError = (error: string): ErrorAction => ({
  type: SET_FAN_ERROR,
  error,
});

export const setFan = (status: boolean) =>
  patchDeviceAction({fan: status}, setFanStart, setFanSuccess, setFanError);

///////////////////////
// Set light actions //
///////////////////////
const setLightStart = (): StartAction => ({
  type: SET_LIGHT_START,
});

const setLightSuccess = ({
  light,
}: Partial<Device>): SuccessAction<Partial<Device>> => ({
  type: SET_LIGHT_SUCCESS,
  response: {light},
});

const setLightError = (error: string): ErrorAction => ({
  type: SET_LIGHT_ERROR,
  error,
});

export const setLight = (status: boolean) =>
  patchDeviceAction(
    {light: status},
    setLightStart,
    setLightSuccess,
    setLightError,
  );

/////////////////////
// Set all actions //
/////////////////////
const setAllStart = (): StartAction => ({
  type: SET_ALL_START,
});

const setAllSuccess = ({
  light,
  fan,
}: Partial<Device>): SuccessAction<Partial<Device>> => ({
  type: SET_ALL_SUCCESS,
  response: {light, fan},
});

const setAllError = (error: string): ErrorAction => ({
  type: SET_ALL_ERROR,
  error,
});

export const setAll = (status: boolean) =>
  patchDeviceAction(
    {light: status, fan: status},
    setAllStart,
    setAllSuccess,
    setAllError,
  );
