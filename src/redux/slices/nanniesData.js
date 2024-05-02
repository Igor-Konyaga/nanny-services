import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nanniesData: [],
  favoriteNannies: [],
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState,
  reducers: {
    setNannies(state, action) {
      state.nanniesData = action.payload;
    },
    addFavoriteNannies(state, action) {
      state.favoriteNannies = [...state.favoriteNannies, action.payload];
    },
    deleteFavoriteNannies(state, action) {
      state.favoriteNannies = state.favoriteNannies?.filter(
        nanny => nanny.name !== action.payload
      );
    },
  },
});

export const { setNannies, addFavoriteNannies, deleteFavoriteNannies } =
  nanniesSlice.actions;

export default nanniesSlice.reducer;
