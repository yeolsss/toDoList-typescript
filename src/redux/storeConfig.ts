import { configureStore } from '@reduxjs/toolkit';
import themeState from './module/theme.slice';
import toDos from './module/todo.slice';

const store = configureStore({
  reducer: { toDos, themeState },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
