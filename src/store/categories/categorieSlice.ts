import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// =========================================

interface ISetSubCategory {
  id: number;
  slug: string;
}

// interface for Variables obj

interface IState {
  categories: ICategories[];
  subCategories: ISubCategory[];
  selectedCategory: string;
  selectedSubCategoryID: ISetSubCategory;
}

// ========================================

// Variables of Store

const initialState: IState = {
  categories: [],
  subCategories: [],
  selectedCategory: "",
  selectedSubCategoryID: { id: 0, slug: "" },
};

// ====================================

export const categorieSlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {
    // Changing Categories

    setCategories: (state, action: PayloadAction<ICategories[]>) => {
      state.categories = [...action.payload];
    },

    setSubCategories: (state, action: PayloadAction<ISubCategory[]>) => {
      state.subCategories = [...action.payload];
    },

    // =======================================

    // Selecting Categories - SubCategories

    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },

    setSelectedCategoryID: (
      state,
      action: PayloadAction<ISetSubCategory>
    ) => {
      state.selectedSubCategoryID = action.payload
    },

    // =========================================
  },
});

export const {
  setCategories,
  setSubCategories,
  setSelectedCategory,
  setSelectedCategoryID,
} = categorieSlice.actions;

export default categorieSlice.reducer;
