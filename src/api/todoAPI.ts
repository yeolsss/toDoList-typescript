import axios from 'axios';
import { TToDo } from '../types/toDo';

export const getToDos = async () => {
  const response = await axios.get<TToDo[]>(
    `${import.meta.env.VITE_BASE_URL}/toDos?_sort=createdAt&_order=desc`,
  );
  return response.data;
};

export const postToDo = async (toDo: TToDo): Promise<unknown> => {
  return await axios.post(`${import.meta.env.VITE_BASE_URL}/toDos`, toDo);
};

export const updateToDo = async (toDo: TToDo): Promise<unknown> => {
  return await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/toDos/${toDo.id}`,
    toDo,
  );
};

export const deleteToDo = async (id: number): Promise<unknown> => {
  return await axios.delete(`${import.meta.env.VITE_BASE_URL}/toDos/${id}`);
};
