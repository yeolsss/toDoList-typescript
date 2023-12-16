import React from 'react';
import * as St from './toDoInput.styled';
import { IInputParams } from '../../hooks/useInput';

interface IProps {
  inputType: string;
  inputValue: string;
  placeholder: string;
  onChangeHandler: ({ e, validDataConfig }: IInputParams) => Promise<void>;
  inputRef?: React.RefObject<HTMLInputElement>;
  validDataConfig: {
    maxLength: number;
    message: string;
  };
}

const ToDoInput = ({
  inputType,
  inputValue,
  placeholder,
  onChangeHandler,
  inputRef,
  validDataConfig,
}: IProps) => {
  return (
    <>
      <St.Input
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler({ e, validDataConfig })
        }
        ref={inputRef}
      />
    </>
  );
};

export default ToDoInput;
