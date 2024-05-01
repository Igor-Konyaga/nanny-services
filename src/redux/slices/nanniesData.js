import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nanniesData: [],
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState,
  reducers: {
    setNannies(state, action) {
      state.nanniesData = action.payload;
    },
  },
});

export const { setNannies } = nanniesSlice.actions;

export default nanniesSlice.reducer;
