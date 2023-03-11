import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      UserGroupId: null,
      UserId: null,
      UserName: '',
    },
  },
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      return {
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
      };
    },
  },
});

export const {setUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
