import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nanniesData: [],
  favoriteNannies: [],
  filtrationCategory: 'Category',
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
    synchronizationLS(state, action) {
      state.favoriteNannies = action.payload;
    },
    setFiltrationCategory(state, action) {
      state.filtrationCategory = action.payload;
    },
    resetFiltrationCategory(state) {
      state.filtrationCategory = 'Category';
    },
  },
});

export const {
  setNannies,
  addFavoriteNannies,
  deleteFavoriteNannies,
  synchronizationLS,
  setFiltrationCategory,
  resetFiltrationCategory,
} = nanniesSlice.actions;

export default nanniesSlice.reducer;
