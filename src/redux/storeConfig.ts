import { configureStore } from '@reduxjs/toolkit';
import loading from './module/loading.slice';
import modal from './module/modal.slice';
import themeState from './module/theme.slice';

const store = configureStore({
  reducer: { themeState, modal, loading },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
