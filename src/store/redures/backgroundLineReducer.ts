import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { backgroundLineTypes } from "../types";

// Define the initial state using that type
const initialState: backgroundLineTypes = {
  topPosition: null,
  scalePrototype: 1,
};

export const backgroundActions = createSlice({
  name: "background",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTopPosition: (state, action: PayloadAction<number>) => {
      state.topPosition = action.payload;
    },
    setPrototypeScale: (state, action: PayloadAction<number>) => {
      state.scalePrototype = action.payload;
    },
  },
});

export const { setTopPosition, setPrototypeScale } = backgroundActions.actions;

// Other code such as selectors can use the imported `RootState` type
export const positionY = (state: RootState) => state.background.topPosition;
export const scalePrototype = (state: RootState) =>
  state.background.scalePrototype;

export default backgroundActions.reducer;
