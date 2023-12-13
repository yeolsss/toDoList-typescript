import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storeConfig';

const initialState = {
  toDos: [] as TToDo[],
};

const toDosSlice = createSlice({
  name: 'toDos',

  initialState,
  reducers: {},
});

export const selectorToDos = (state: RootState) => state.toDos;
export default toDosSlice.reducer;
