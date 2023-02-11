import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  likes: [],
  favourites: [],
  dislikes: [],
};

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setLikeItem(state, action) {
      state.likes = action.payload;
      console.log(state.likes, 'like selected');
    },
    setFavouriteItem(state, action) {
      state.favourites = action.payload;
      console.log(state.favourites, 'favourite selected');
    },
    setDislikeItem(state, action) {
      state.dislikes = action.payload;
      console.log(state.dislikes, 'dislike selected');
    },
  },
});

export const { setItems, setLikeItem, setFavouriteItem, setDislikeItem } =
  selectedSlice.actions;

export default selectedSlice.reducer;
