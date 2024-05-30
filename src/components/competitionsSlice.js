import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "../api";

export const fetchCompetitions = createAsyncThunk(
  "competitions/fetchCompetitions",
  async () => {
    const response = await apiEndpoints.getCompetitions();
    console.log(response.data);
    return response.data;
  }
);

const competitionsSlice = createSlice({
  name: "competitions",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompetitions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCompetitions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default competitionsSlice.reducer;
