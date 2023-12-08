import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  reviews: IReviews[];
}

const initialState: IState = {
  reviews: [],
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<IReviews[]>) => {
      state.reviews = [...action.payload];
    },
  },
});

export const { setReviews } = reviewSlice.actions;

export default reviewSlice.reducer;
