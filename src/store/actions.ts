import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LocalStorage} from '~/utils';

export const fetchUsers = createAsyncThunk(
  'account/fetchUsers',
  async payload => {
    if (payload == null) {
      await LocalStorage.deleteToken();
      return false;
    } else if (payload == 'booleanControl') {
      return true;
    } else if (payload !== null) {
      // const res = await Login(payload)
      // if (res.message.includes('Sai tên tài khoản hoặc mật khẩu')) {
      //   return false
      // } else {
      //   await LocalStorage.setToken(res?.token)
      //   await LocalStorage.setUserInformation(res?.data)
      //   return true
      // }
    }
  },
);

export const Account = createSlice({
  name: 'account',
  initialState: {
    current: [],
    isActivated: null,
  },
  reducers: {
    setUser(state, action) {
      state.current = action.payload;
    },
  },
  extraReducers: {
    // [fetchUsers.fulfilled]: (state, action) => {
    //   state.isActivated = action.payload
    // },
  },
});

export const {setUser} = Account.actions;
