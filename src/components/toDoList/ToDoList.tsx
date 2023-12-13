import { useMemo } from 'react';
import { getToDos } from '../../api/todoAPI';
import { useCustomQuery } from '../../hooks/useCustomQuery';
import ToDo from '../toDo';
import * as St from './toDoList.styled';
function ToDoList() {
  // customHook query
  const queryOptions = {
    queryKey: ['toDos'],
    queryFn: getToDos,
    queryOptions: { staleTime: Infinity },
  };

  const [toDosIsLoading, toDosIsError, toDosError, toDos] = useCustomQuery<
    TToDo[],
    Error
  >(queryOptions);

  const [unDoneToDos, doneToDos] = useMemo(() => {
    if (!toDos) return [[], []];
    return toDos.reduce(
      (acc: TToDo[][], cur) => {
        acc[cur.isDone ? 1 : 0].push(cur);
        return acc;
      },
      [[], []],
    ) as TToDo[][];
  }, [toDos]);

  if (toDosIsLoading) return <div>Loading...</div>;
  if (toDosIsError) return <div>Error: {toDosError?.message}</div>;

  return (
    <St.ToDoListWrapper>
      <section>
        <h1>ToDo</h1>
        <St.ToDoList>
          {unDoneToDos?.map((toDo: TToDo) => (
            <ToDo key={toDo.id} toDo={toDo} />
          ))}
        </St.ToDoList>
      </section>

      <section>
        <h1>Done</h1>
        <St.ToDoList>
          {doneToDos?.map((toDo: TToDo) => <ToDo key={toDo.id} toDo={toDo} />)}
        </St.ToDoList>
      </section>
    </St.ToDoListWrapper>
  );
}

export default ToDoList;
