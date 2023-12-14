import axios from 'axios';

interface IUpdatePrams {
  id: number;
  toDo: TToDo;
}

export const getToDos = async () => {
  const response = await axios.get<TToDo[]>(
    `${import.meta.env.VITE_BASE_URL}/toDos?_sort=createdAt&_order=desc`,
  );
  return response.data;
};

export const postToDo = async (toDo: TToDo) => {
  return await axios.post(`${import.meta.env.VITE_BASE_URL}/toDos`, toDo);
};

export const updateToDo = async ({ id, toDo }: IUpdatePrams) => {
  return await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/toDos/${id}`,
    toDo,
  );
};

export const deleteToDo = async (id: number) => {
  return await axios.delete(`${import.meta.env.VITE_BASE_URL}/toDos/${id}`);
};
