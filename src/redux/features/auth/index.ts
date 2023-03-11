import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
  },
  reducers: {
    RESTORE_TOKEN(state, action: PayloadAction<any>) {
      console.log('RESTORE_TOKEN', action, state);
    },
    SIGN_IN(state, action: PayloadAction<any>) {
      return {
        ...state,
        token: action?.payload,
      };
    },
    SIGN_OUT(state, action: PayloadAction<any>) {
      return {
        ...state,
        token: action?.payload,
      };
    },
  },
});

export const {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} = authSlice.actions;
export const authReducers = authSlice.reducer;
