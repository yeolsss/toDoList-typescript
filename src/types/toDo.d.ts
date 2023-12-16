export enum EIsDone {
  UN_DONE,
  DONE,
}

export type TToDo = {
  id?: number;
  title: string;
  todo: string;
  isDone: EIsDone;
  createdAt: string;
};

export type TToDos = {
  toDos: TToDo[];
};
