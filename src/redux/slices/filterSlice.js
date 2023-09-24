import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTypeCategory: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setTypeCategory } = filterSlice.actions;

export default filterSlice.reducer;
