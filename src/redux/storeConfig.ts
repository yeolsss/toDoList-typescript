import { configureStore } from '@reduxjs/toolkit';
import toDos from './module/toDoSlice';

const store = configureStore({
  reducer: { toDos },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
