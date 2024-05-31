import { createSlice } from "@reduxjs/toolkit";

const sportsSlice = createSlice({
  name: "sports",
  initialState: {
    selectedSport: null,
  },
  reducers: {
    selectSport: (state, action) => {
      state.selectedSport = action.payload;
    },
  },
});

export const { selectSport } = sportsSlice.actions;
export const selectSelectedSport = (state) => state.sports.selectedSport;

export default sportsSlice.reducer;
