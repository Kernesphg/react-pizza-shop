import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryType: 0,
  sortTypeObj: {
    name: 'популярности',
    sortType: 'rating',
  },
  orderType: true,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTypeCategory: (state, action) => {
      state.categoryType = action.payload;
    },
    setSortType: (state, action) => {
      state.sortTypeObj = action.payload;
    },
    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },
  },
});

export const { setTypeCategory, setSortType, setOrderType } = filterSlice.actions;

export default filterSlice.reducer;
