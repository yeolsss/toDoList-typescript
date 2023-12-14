import { useQueryClient } from '@tanstack/react-query';
import { deleteToDo, updateToDo } from '../../api/todoAPI';
import { EIsDone } from '../../types/types';
import ToDoButton from '../button';
import * as St from './toDoCard.styled';
import { useCustomMutation } from '../../hooks';
import { useCustomModal } from '../../hooks/useCustomModal.ts';

interface IToDo {
  toDo: TToDo;
}
const ToDo = ({ toDo }: IToDo) => {
  const queryClient = useQueryClient();
  const { handleOpenModal } = useCustomModal();

  const updateMutationOptions = {
    mutationFn: updateToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDos'] });
    },
  };
  const deleteMutationOptions = {
    mutationFn: deleteToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDos'] });
    },
  };
  const updateMutate = useCustomMutation(updateMutationOptions);
  const deleteMutate = useCustomMutation(deleteMutationOptions);

  // update
  const handleOnClickIsDone = () => {
    const updatedToDo = {
      ...toDo,
      isDone: toDo.isDone ? EIsDone.UN_DONE : EIsDone.DONE,
    };
    updateMutate({ id: toDo.id!, toDo: updatedToDo });
  };

  // delete
  const handleOnClickDelete = async () => {
    if (await handleOpenModal('삭제 하시겠습니까?')) {
      deleteMutate(toDo.id!);
    }
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
          text={toDo.isDone ? '취소' : '완료'}
          btnType={'button'}
          handler={handleOnClickIsDone}
        />
      </St.ButtonWrapper>
    </St.ToDoCard>
  );
};

export default ToDo;
