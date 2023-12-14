import { configureStore } from '@reduxjs/toolkit';
import themeState from './module/theme.slice';
import toDos from './module/todo.slice';
import modal from './module/modal.slice';

const store = configureStore({
  reducer: { toDos, themeState, modal },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
