import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  id: '',
  token: '',
  isAuthorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isAuthorized = action.payload.isAuthorized;
    },

    removeAuth(state) {
      state.email = '';
      state.id = '';
      state.token = '';
      state.isAuthorized = false;
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;

export default authSlice.reducer;
