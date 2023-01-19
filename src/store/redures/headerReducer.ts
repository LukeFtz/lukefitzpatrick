import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { headerTypesRx } from "../types";

// Define the initial state using that type
const initialState: headerTypesRx = {
  lineStarted: false,
};

export const headerActions = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    started: (state) => {
      state.lineStarted = true;
    },
  },
});

export const { started } = headerActions.actions;

// Other code such as selectors can use the imported `RootState` type
export const isLineStaterd = (state: RootState) => state.header.lineStarted;

export default headerActions.reducer;
