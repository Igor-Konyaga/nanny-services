import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import nanniesReducer from './slices/nanniesData';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    nannies: nanniesReducer,
  },
});
