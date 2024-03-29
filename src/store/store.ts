import { configureStore } from "@reduxjs/toolkit";
import backgroundActions from "./redures/backgroundLineReducer";
import headerReducer from "./redures/headerReducer";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    background: backgroundActions,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
