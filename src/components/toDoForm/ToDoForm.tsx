import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { postToDo } from '../../api/todoAPI.ts';
import { getDate } from '../../common/util.ts';
import ToDoButton from '../button';
import ToDoInput from '../input/ToDoInput.tsx';
import * as St from './toDoForm.styled';
import { useCustomMutation } from '../../hooks';
import useInput from '../../hooks/useInput.ts';

const ToDoForm = () => {
  const [titleState, titleHandler, titleResetState] = useInput();
  const [todoState, todoHandler, todoResetState] = useInput();

  const queryClient = useQueryClient();

  const mutateOptions = {
    mutationFn: postToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDos'] });
      titleResetState();
      todoResetState();
    },
  };
  const mutate = useCustomMutation(mutateOptions);

  const handleOnSubmitToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newToDo: TToDo = {
      title: titleState,
      todo: todoState,
      isDone: 0,
      createdAt: getDate(),
    };
    mutate(newToDo);
  };

  return (
    <St.FormWrapper>
      <form onSubmit={handleOnSubmitToDo}>
        <div>
          <ToDoInput
            inputType={'text'}
            inputValue={titleState}
            placeholder={'제목을 입력해주세요.'}
            handler={titleHandler}
          />
          <ToDoInput
            inputType={'text'}
            inputValue={todoState}
            placeholder={'할 일을 입력해주세요.'}
            handler={todoHandler}
          />
        </div>
        <ToDoButton text={'등록'} btnType={'submit'} />
      </form>
    </St.FormWrapper>
  );
};
export default ToDoForm;
