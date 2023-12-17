import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { deleteToDo, updateToDo } from '../../api/todoAPI';
import { useCustomMutation } from '../../hooks';
import { useCustomModal } from '../../hooks/useCustomModal';
import { EIsDone, TToDo } from '../../types/toDo.d';
import ToDoButton from '../button';
import * as St from './toDoCard.styled';

interface IToDo {
  toDo: TToDo;
}
const ToDo = ({ toDo }: IToDo) => {
  const queryClient = useQueryClient();
  const { handleOpenModal } = useCustomModal();
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    updateMutate(updatedToDo);
  };

  // delete
  const handleOnClickDelete = async () => {
    buttonRef.current?.blur();
    if (await handleOpenModal('삭제 하시겠습니까?', 'confirm')) {
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
          buttonRef={buttonRef}
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
