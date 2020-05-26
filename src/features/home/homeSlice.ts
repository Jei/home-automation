import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface HomeState {
  host: string;
  port: number;
}

const initialState: HomeState = {
  host: '10.0.2.2',
  port: 3000,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHost: (state: HomeState, {payload}: PayloadAction<string>) => {
      state.host = payload;
    },
    setPort: (state: HomeState, {payload}: PayloadAction<number>) => {
      state.port = payload;
    },
  },
});

export const endpointSelector = (state: HomeState) =>
  `http://${state.host}:${state.port}`;

export const {setHost, setPort} = homeSlice.actions;

export default homeSlice.reducer;
