import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storeConfig.ts';

const initialState = {
  isOpen: false,
  modal: null,
  title: '',
  result: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.modal = payload.modal;
      state.title = payload.title;
    },
    setResult: (state, { payload }) => {
      state.result = payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modal = null;
      state.title = '';
    },
  },
});

export const { openModal, setResult, closeModal } = modalSlice.actions;
export const selectorModal = (state: RootState) => state.modal;
export default modalSlice.reducer;
