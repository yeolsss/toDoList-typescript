import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storeConfig.ts';

interface IIsLoading {
  isLoading: boolean;
}

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<IIsLoading>) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export const selectorIsLoading = (state: RootState) => state.loading.isLoading;
export default loadingSlice.reducer;
