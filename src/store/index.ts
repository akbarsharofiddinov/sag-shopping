import { configureStore } from "@reduxjs/toolkit";
import categorieSlice from "./categories/categorieSlice";
import reviewSlice from "./reviews/reviewSlice";

export const store = configureStore({
  reducer: {
    Categories: categorieSlice,
    Reviews: reviewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
