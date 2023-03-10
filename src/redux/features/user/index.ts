import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {
      UserGroupId: null,
      UserId: null,
      UserName: '',
    },
  },
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      return {
        current: {
          ...state.current,
          ...action.payload,
        },
      };
    },
  },
});

export const {setUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
