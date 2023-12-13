import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteToDo, updateToDo } from '../../api/todoAPI';
import { EIsDone } from '../../types/types';
import ToDoButton from '../button';
import * as St from './toDoCard.styled';

interface IToDo {
  toDo: TToDo;
}
const ToDo = ({ toDo }: IToDo) => {
  const queryClient = useQueryClient();
  const {
    isPending: updateIsPending,
    isError: updateIsError,
    error: updateError,
    mutate: updateMutate,
  } = useMutation({
    mutationFn: updateToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDos'] });
    },
  });

  const {
    isPending: deleteIsPending,
    isError: deleteIsError,
    error: deleteError,
    mutate: deleteMutate,
  } = useMutation({
    mutationFn: deleteToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDos'] });
    },
  });

  // update
  const handleOnClickIsDone = () => {
    const updatedToDo = {
      ...toDo,
      isDone: toDo.isDone ? EIsDone.UN_DONE : EIsDone.DONE,
    };
    updateMutate({ id: toDo.id!, toDo: updatedToDo });
  };

  // delete
  const handleOnClickDelete = () => {
    deleteMutate(toDo.id!);
  };

  return (
    <St.ToDoCard>
      <span>{toDo.title}</span>
      <p>{toDo.todo}</p>
      <St.ButtonWrapper data-id={toDo.id}>
        <ToDoButton
          text={'삭제'}
          btnType={'button'}
          handler={handleOnClickDelete}
        />
        <ToDoButton
          text={'완료'}
          btnType={'button'}
          handler={handleOnClickIsDone}
        />
      </St.ButtonWrapper>
    </St.ToDoCard>
  );
};

export default ToDo;
