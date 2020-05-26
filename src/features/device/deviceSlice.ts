import {Device} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '../../store';
import api from '../../services/api';
import {endpointSelector} from '../home/homeSlice';

interface DeviceState {
  details: Device | null;
  isLoading: boolean;
  isLoadingName: boolean;
  isLoadingFan: boolean;
  isLoadingLight: boolean;
  loadingError: string | null;
  error: string | null;
}

const initialState: DeviceState = {
  details: null,
  isLoading: false,
  isLoadingName: false,
  isLoadingFan: false,
  isLoadingLight: false,
  loadingError: null,
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
      state.loadingError = null;
    },
    fetchDeviceError: (
      state: DeviceState,
      {payload}: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.loadingError = payload;
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
    setNameStart: (state: DeviceState) => {
      state.isLoadingName = true;
    },
    setNameSuccess: (
      state: DeviceState,
      {payload}: PayloadAction<string | null>,
    ) => {
      state.isLoadingName = false;
      state.error = null;
      if (state.details) {
        state.details.name = payload;
      }
    },
    setNameError: (state: DeviceState, {payload}: PayloadAction<string>) => {
      state.isLoadingName = false;
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
  setNameStart,
  setNameSuccess,
  setNameError,
} = deviceSlice.actions;

export default deviceSlice.reducer;

export const fetchDevice = (id: string): AppThunk => async (
  dispatch,
  getState,
) => {
  let response: Device;
  dispatch(fetchDeviceStart());
  try {
    response = await api
      .get<Device>(`${endpointSelector(getState().home)}/devices/${id}`)
      .then((res) => res.data);
  } catch (err) {
    dispatch(fetchDeviceError(err.toString()));
    return;
  }
  dispatch(fetchDeviceSuccess(response));
};

const setFan = (value: boolean): AppThunk => async (dispatch, getState) => {
  const {home, device} = getState();
  const {details, isLoading, isLoadingFan} = device;

  if (isLoading || details === null) {
    dispatch(setFanError('Device unavailable'));
    return;
  }

  const {id, fan} = details;

  if (isLoadingFan || value === fan) {
    return;
  }

  dispatch(setFanStart());
  try {
    await api.patch(`${endpointSelector(home)}/devices/${id}`, {
      fan: value,
    });
  } catch (err) {
    dispatch(setFanError(err.toString()));
    return;
  }
  dispatch(setFanSuccess(value));
};

export const toggleFan = (): AppThunk => async (dispatch, getState) => {
  const {details, isLoading} = getState().device;

  if (isLoading || details === null) {
    dispatch(setFanError('Device unavailable'));
    return;
  }

  await dispatch(setFan(!details.fan));
};

const setLight = (value: boolean): AppThunk => async (dispatch, getState) => {
  const {home, device} = getState();
  const {details, isLoading, isLoadingLight} = device;

  if (isLoading || details === null) {
    dispatch(setLightError('Device unavailable'));
    return;
  }

  const {id, light} = details;

  if (isLoadingLight || value === light) {
    return;
  }

  dispatch(setLightStart());
  try {
    await api.patch(`${endpointSelector(home)}/devices/${id}`, {
      light: value,
    });
  } catch (err) {
    dispatch(setLightError(err.toString()));
    return;
  }
  dispatch(setLightSuccess(value));
};

export const toggleLight = (): AppThunk => async (dispatch, getState) => {
  const {details, isLoading} = getState().device;

  if (isLoading || details === null) {
    dispatch(setLightError('Device unavailable'));
    return;
  }

  await dispatch(setLight(!details.light));
};

export const setAll = (status: boolean): AppThunk => async (
  dispatch,
  getState,
) => {
  const {home, device} = getState();
  const {details, isLoading, isLoadingFan, isLoadingLight} = device;

  if (isLoading || details === null) {
    dispatch(setAllError('Device unavailable'));
    return;
  }

  const {fan, light} = details;
  const updateFan = !isLoadingFan && fan !== status;
  const updateLight = !isLoadingLight && light !== status;

  if (updateFan && !updateLight) {
    await dispatch(setFan(status));
  } else if (!updateFan && updateLight) {
    await dispatch(setLight(status));
  } else if (updateFan && updateLight) {
    dispatch(setAllStart());
    try {
      await api.patch(`${endpointSelector(home)}/devices/${details.id}`, {
        fan: status,
        light: status,
      });
    } catch (err) {
      dispatch(setAllError(err.toString()));
      return;
    }
    dispatch(setAllSuccess(status));
  }
};

export const setName = (name: string | null): AppThunk => async (
  dispatch,
  getState,
) => {
  const {home, device} = getState();
  const {details, isLoading} = device;

  if (isLoading || details === null) {
    dispatch(setNameError('Device unavailable'));
    return;
  }

  dispatch(setNameStart());
  try {
    await api.patch(`${endpointSelector(home)}/devices/${details.id}`, {
      name,
    });
  } catch (err) {
    dispatch(setNameError(err.toString()));
    return;
  }
  dispatch(setNameSuccess(name));
};
