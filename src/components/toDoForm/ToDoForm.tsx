import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { postToDo } from '../../api/todoAPI';
import { getDate } from '../../common/util';
import { useCustomMutation } from '../../hooks';
import { useCustomModal } from '../../hooks/useCustomModal';
import useInput from '../../hooks/useInput';
import { TToDo } from '../../types/toDo';
import ToDoButton from '../button';
import ToDoInput from '../input/ToDoInput';
import * as St from './toDoForm.styled';

const TITLE_MAX_LENGTH = 13;
const TODO_MAX_LENGTH = 130;

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

  const handleOnSubmitToDo = async (e: React.FormEvent<HTMLFormElement>) => {
    // 모달이 열려 있으면 함수를 종료합니다.
    e.preventDefault();
    titleRef.current?.blur();
    todoRef.current?.blur();

    const todoValid = todoState.trim();

    if (!todoValid) {
      await handleOpenModal('할 일을 입력해주세요.', 'alert');
      setTimeout(() => {
        todoRef.current?.focus();
      }, 0);
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

  return (
    <St.FormWrapper>
      <form onSubmit={handleOnSubmitToDo}>
        <div>
          <ToDoInput
            inputType={'text'}
            inputValue={titleState}
            placeholder={'제목을 입력해주세요.'}
            onChangeHandler={titleHandler}
            inputRef={titleRef}
            validDataConfig={{
              maxLength: TITLE_MAX_LENGTH,
              message: `제목은 ${TITLE_MAX_LENGTH}자 이하로 입력해 주세요.`,
            }}
          />
          <ToDoInput
            inputType={'text'}
            inputValue={todoState}
            placeholder={'할 일을 입력해주세요.'}
            onChangeHandler={todoHandler}
            inputRef={todoRef}
            validDataConfig={{
              maxLength: TODO_MAX_LENGTH,
              message: `제목은 ${TODO_MAX_LENGTH}자 이하로 입력해 주세요.`,
            }}
          />
        </div>
        {/* <ToDoButton text={'등록'} btnType={'submit'} /> */}

        <ToDoButton text={'등록'} btnType={'submit'} />
      </form>
    </St.FormWrapper>
  );
};
export default ToDoForm;
