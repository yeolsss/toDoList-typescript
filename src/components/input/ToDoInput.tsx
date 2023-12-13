import React from 'react';
import * as St from './toDoInput.styled';

interface IProps {
  inputType: string;
  inputValue: string;
  placeholder: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToDoInput = ({ inputType, inputValue, placeholder, handler }: IProps) => {
  return (
    <>
      <St.Input
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={handler}
      />
    </>
  );
};

export default ToDoInput;
