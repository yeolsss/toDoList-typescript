import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storeConfig';

const THEME_LOCAL_KEY = 'todo_theme';

const initialState = {
  theme: JSON.parse(localStorage.getItem(THEME_LOCAL_KEY)!) || 'darkTheme',
};

const themeSlice = createSlice({
  name: 'themeState',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const currentTheme =
        state.theme === 'darkTheme' ? 'lightTheme' : 'darkTheme';
      localStorage.setItem(THEME_LOCAL_KEY, JSON.stringify(currentTheme));
      state.theme = currentTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectorTheme = (state: RootState) => state.themeState;
export default themeSlice.reducer;
