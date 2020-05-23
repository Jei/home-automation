import {Device} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '../../store';
import api from '../../services/api';

interface DeviceState {
  details: Device | null;
  isLoading: boolean;
  isLoadingName: boolean;
  isLoadingFan: boolean;
  isLoadingLight: boolean;
  error: string | null;
}

const initialState: DeviceState = {
  details: null,
  isLoading: false,
  isLoadingName: false,
  isLoadingFan: false,
  isLoadingLight: false,
  error: null,
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    fetchDeviceStart: (state: DeviceState) => {
      state.isLoading = true;
    },
    fetchDeviceSuccess: (
      state: DeviceState,
      {payload}: PayloadAction<Device>,
    ) => {
      state.details = payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchDeviceError: (
      state: DeviceState,
      {payload}: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
    setFanStart: (state: DeviceState) => {
      state.isLoadingFan = true;
    },
    setFanSuccess: (state: DeviceState, {payload}: PayloadAction<boolean>) => {
      state.isLoadingFan = false;
      state.error = null;
      if (state.details) {
        state.details.fan = payload;
      }
    },
    setFanError: (state: DeviceState, {payload}: PayloadAction<string>) => {
      state.isLoadingFan = false;
      state.error = payload;
    },
    setLightStart: (state: DeviceState) => {
      state.isLoadingLight = true;
    },
    setLightSuccess: (
      state: DeviceState,
      {payload}: PayloadAction<boolean>,
    ) => {
      state.isLoadingLight = false;
      state.error = null;
      if (state.details) {
        state.details.light = payload;
      }
    },
    setLightError: (state: DeviceState, {payload}: PayloadAction<string>) => {
      state.isLoadingLight = false;
      state.error = payload;
    },
    setAllStart: (state: DeviceState) => {
      state.isLoadingFan = true;
      state.isLoadingLight = true;
    },
    setAllSuccess: (state: DeviceState, {payload}: PayloadAction<boolean>) => {
      state.isLoadingFan = false;
      state.isLoadingLight = false;
      state.error = null;
      if (state.details) {
        state.details.fan = payload;
        state.details.light = payload;
      }
    },
    setAllError: (state: DeviceState, {payload}: PayloadAction<string>) => {
      state.isLoadingFan = false;
      state.isLoadingLight = false;
      state.error = payload;
    },
  },
});

export const {
  fetchDeviceStart,
  fetchDeviceSuccess,
  fetchDeviceError,
  setFanStart,
  setFanSuccess,
  setFanError,
  setLightStart,
  setLightSuccess,
  setLightError,
  setAllStart,
  setAllSuccess,
  setAllError,
} = deviceSlice.actions;

export default deviceSlice.reducer;

export const fetchDevice = (id: string): AppThunk => async (dispatch) => {
  let response: Device;
  dispatch(fetchDeviceStart());
  try {
    response = await api.get<Device>(`/devices/${id}`).then((res) => res.data);
  } catch (err) {
    dispatch(fetchDeviceError(err.toString()));
    return;
  }
  dispatch(fetchDeviceSuccess(response));
};

export const setFan = (fan: boolean): AppThunk => async (
  dispatch,
  getState,
) => {
  const {details, isLoading} = getState().device;

  if (isLoading || details === null) {
    dispatch(setFanError('Device unavailable'));
    return;
  }

  dispatch(setFanStart());
  try {
    await api.patch(`/devices/${details.id}`, {
      fan,
    });
  } catch (err) {
    dispatch(setFanError(err.toString()));
    return;
  }
  dispatch(setFanSuccess(fan));
};

export const setLight = (light: boolean): AppThunk => async (
  dispatch,
  getState,
) => {
  const {details, isLoading} = getState().device;

  if (isLoading || details === null) {
    dispatch(setLightError('Device unavailable'));
    return;
  }

  dispatch(setLightStart());
  try {
    await api.patch(`/devices/${details.id}`, {
      light,
    });
  } catch (err) {
    dispatch(setLightError(err.toString()));
    return;
  }
  dispatch(setLightSuccess(light));
};

export const setAll = (status: boolean): AppThunk => async (
  dispatch,
  getState,
) => {
  const {details, isLoading} = getState().device;

  if (isLoading || details === null) {
    dispatch(setAllError('Device unavailable'));
    return;
  }

  dispatch(setAllStart());
  try {
    await api.patch(`/devices/${details.id}`, {
      fan: status,
      light: status,
    });
  } catch (err) {
    dispatch(setAllError(err.toString()));
    return;
  }
  dispatch(setAllSuccess(status));
};
