import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from './slice/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});