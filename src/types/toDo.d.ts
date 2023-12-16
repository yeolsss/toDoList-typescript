declare enum EIsDone {
  UN_DONE,
  DONE,
}

declare type TToDo = {
  id?: number;
  title: string;
  todo: string;
  isDone: EIsDone;
  createdAt: string;
};

declare type TToDos = {
  toDos: TToDo[];
};
