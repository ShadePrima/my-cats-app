import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  config: {},
  data: [],
  headers: {},
  request: {},
  status: 200,
  statusText: '',
};

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = breedsSlice.actions;

export default breedsSlice.reducer;
