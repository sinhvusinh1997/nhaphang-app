import {createSlice} from '@reduxjs/toolkit';

export const globalState = createSlice({
  name: 'globalState',
  initialState: {
    unpaid: [],
    paid: [],
  },
  reducers: {
    globaleConfig(state, action) {
      console.log('globaleConfig_state: ', state);
      console.log('globaleConfig_action: ', action);
    },
  },
});

export const {globaleConfig} = globalState.actions;
