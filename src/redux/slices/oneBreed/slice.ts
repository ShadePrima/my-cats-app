import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  config: {},
  data: [],
  headers: {},
  request: {},
  status: '',
  statusText: '',
  keyBreed: '',
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
  },
});

export const { setDataBreed, setKeyBreed } = oneBreedSlice.actions;

export default oneBreedSlice.reducer;
