import {Action} from 'redux';

export interface Device {
  id: string;
  name: string | null;
  fan: boolean;
  light: boolean;
}

export interface DeviceState {
  device: Device | null;
  loading: boolean;
  loadingName: boolean;
  loadingFan: boolean;
  loadingLight: boolean;
  error: string | null;
}

export const FETCH_DEVICE_START = 'FETCH_DEVICE_START';
export const FETCH_DEVICE_SUCCESS = 'FETCH_DEVICE_SUCCESS';
export const FETCH_DEVICE_ERROR = 'FETCH_DEVICE_ERROR';
export const RENAME_START = 'RENAME_START';
export const RENAME_SUCCESS = 'RENAME_SUCCESS';
export const RENAME_ERROR = 'RENAME_ERROR';
export const SET_FAN_START = 'SET_FAN_START';
export const SET_FAN_SUCCESS = 'SET_FAN_SUCCESS';
export const SET_FAN_ERROR = 'SET_FAN_ERROR';
export const SET_LIGHT_START = 'SET_LIGHT_START';
export const SET_LIGHT_SUCCESS = 'SET_LIGHT_SUCCESS';
export const SET_LIGHT_ERROR = 'SET_LIGHT_ERROR';
export const SET_ALL_START = 'SET_ALL_START';
export const SET_ALL_SUCCESS = 'SET_ALL_SUCCESS';
export const SET_ALL_ERROR = 'SET_ALL_ERROR';

export interface StartAction extends Action<string> {}

export interface SuccessAction<V> extends Action<string> {
  response: V;
}

export interface ErrorAction extends Action<string> {
  error: string;
}
