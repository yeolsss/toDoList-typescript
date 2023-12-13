declare enum EIsDone {
  DONE,
  UN_DONE,
}

declare type TToDo = {
  id: number;
  title: string;
  todo: string;
  isDone: EIsDone;
};

declare type TToDos = {
  toDos: TToDo[];
};
