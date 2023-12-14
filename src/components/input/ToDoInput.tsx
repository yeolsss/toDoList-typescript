import React from 'react';
import * as St from './toDoInput.styled';

interface IProps {
  inputType: string;
  inputValue: string;
  placeholder: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const ToDoInput = ({
  inputType,
  inputValue,
  placeholder,
  handler,
  inputRef,
}: IProps) => {
  return (
    <>
      <St.Input
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={handler}
        ref={inputRef}
      />
    </>
  );
};

export default ToDoInput;
