import {configureStore} from '@reduxjs/toolkit';
import {authReducers, userReducer} from './features';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
