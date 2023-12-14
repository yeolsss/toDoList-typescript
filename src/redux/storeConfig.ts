import { configureStore } from '@reduxjs/toolkit';
import themeState from './module/theme.slice';
import toDos from './module/todo.slice';
import modal from './module/modal.slice';
import loading from './module/loading.slice';

const store = configureStore({
  reducer: { toDos, themeState, modal, loading },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
