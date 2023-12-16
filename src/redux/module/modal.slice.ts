import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storeConfig.ts';

const initialState = {
  isOpen: false,
  modal: '',
  title: '',
  result: false,
};
type OpenModalActionPayload = {
  modal: string;
  title: string;
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<OpenModalActionPayload>) => {
      const { modal, title } = action.payload;
      state.isOpen = true;
      state.modal = modal;
      state.title = title;
    },
    setResult: (state, { payload }: { payload: boolean }) => {
      state.result = payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modal = '';
      state.title = '';
    },
  },
});

export const { openModal, setResult, closeModal } = modalSlice.actions;
export const selectorModal = (state: RootState) => state.modal;
export default modalSlice.reducer;
