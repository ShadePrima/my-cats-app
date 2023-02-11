import { configureStore } from '@reduxjs/toolkit';
import breeds from './slices/breeds/slice';
import oneBreed from './slices/oneBreed/slice';
import selected from './slices/selectedItem/slice';

export const store = configureStore({
  reducer: {
    breeds,
    oneBreed,
    selected,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
