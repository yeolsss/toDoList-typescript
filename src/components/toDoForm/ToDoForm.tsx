import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import { postToDo } from '../../api/todoAPI';
import { getDate } from '../../common/util';
import { useCustomMutation } from '../../hooks';
import { useCustomModal } from '../../hooks/useCustomModal';
import useInput from '../../hooks/useInput';
import ToDoButton from '../button';
import ToDoInput from '../input/ToDoInput';
import * as St from './toDoForm.styled';

const ToDoForm = () => {
  const [titleState, titleHandler, titleResetState] = useInput();
  const [todoState, todoHandler, todoResetState] = useInput();
  const titleRef = useRef<HTMLInputElement>(null);
  const todoRef = useRef<HTMLInputElement>(null);
  const { handleOpenModal } = useCustomModal();
  // 모달의 상태를 가져옵니다.

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

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleOnSubmitToDo = async () => {
    // 모달이 열려 있으면 함수를 종료합니다.

    titleRef.current?.blur();
    todoRef.current?.blur();

    /* if (!titleState.trim()) {
      await handleOpenModal('제목을 입력해주세요.', 'alert');
      titleRef.current?.focus();
      return;
    } */

    if (!todoState.trim()) {
      await handleOpenModal('할 일을 입력해주세요.', 'alert');
      todoRef.current?.focus();
      return;
    }

    const newToDo: TToDo = {
      title: titleState,
      todo: todoState,
      isDone: 0,
      createdAt: getDate(),
    };
    mutate(newToDo);
  };

  const HandleOnClickToDo = () => {
    handleOnSubmitToDo();
  };

  const HandleOnKeyDownToDo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.currentTarget === e.target) {
      if (e.key === 'Enter') handleOnSubmitToDo();
    }
  };

  return (
    <St.FormWrapper>
      {/* <form onSubmit={handleOnSubmitToDo}> */}
      <form>
        <div>
          <ToDoInput
            inputType={'text'}
            inputValue={titleState}
            placeholder={'제목을 입력해주세요.'}
            onChangeHandler={titleHandler}
            onKeyDownHandler={HandleOnKeyDownToDo}
            inputRef={titleRef}
          />
          <ToDoInput
            inputType={'text'}
            inputValue={todoState}
            placeholder={'할 일을 입력해주세요.'}
            onChangeHandler={todoHandler}
            onKeyDownHandler={HandleOnKeyDownToDo}
            inputRef={todoRef}
          />
        </div>
        {/* <ToDoButton text={'등록'} btnType={'submit'} /> */}

        <ToDoButton
          text={'등록'}
          btnType={'button'}
          handler={HandleOnClickToDo}
        />
      </form>
    </St.FormWrapper>
  );
};
export default ToDoForm;
