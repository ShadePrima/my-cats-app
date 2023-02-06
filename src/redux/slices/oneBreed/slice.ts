import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  keyBreed: '',
  limit: '',
  order: '',
};

export const oneBreedSlice = createSlice({
  name: 'oneBreed',
  initialState,
  reducers: {
    setDataBreed(state, action) {
      state.data = action.payload;
    },
    setKeyBreed(state, action) {
      state.keyBreed = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
    setOrderAsc(state, action) {
      state.order = action.payload;
      console.log(state.order, 'order');
    },
    setOrderDesc(state, action) {
      state.order = action.payload;
      console.log(state.order, 'order');
    },
  },
});

export const {
  setDataBreed,
  setKeyBreed,
  setLimit,
  setOrderAsc,
  setOrderDesc,
} = oneBreedSlice.actions;

export default oneBreedSlice.reducer;
