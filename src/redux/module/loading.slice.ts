import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storeConfig.ts';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export const selectorIsLoading = (state: RootState) => state.loading.isLoading;
export default loadingSlice.reducer;
