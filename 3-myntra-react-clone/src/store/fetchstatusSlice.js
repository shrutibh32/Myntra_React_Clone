import { createSlice } from "@reduxjs/toolkit";

export const fetchStatusSlice = createSlice({
  name: "fetchStatusSlice",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    MarkFetchDone: (state) => {
       (state.fetchDone = true);
    },
    MarkFetchingStarted: (state) => {
       (state.currentlyFetching = true);
    },
    MarkFetchingFinished: (state) => {
       (state.currentlyFetching = false);
    },
  },
});

// Action creators are generated for each case reducer function
export const fetchStatusSliceActions =
  fetchStatusSlice.actions;
