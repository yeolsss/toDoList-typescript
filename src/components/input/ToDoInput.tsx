import React from 'react';
import * as St from './toDoInput.styled';

interface IProps {
  inputType: string;
  inputValue: string;
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const ToDoInput = ({
  inputType,
  inputValue,
  placeholder,
  onChangeHandler,
  inputRef,
}: IProps) => {
  return (
    <>
      <St.Input
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeHandler}
        ref={inputRef}
      />
    </>
  );
};

export default ToDoInput;
