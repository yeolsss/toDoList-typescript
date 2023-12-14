import * as St from './toDoButton.styled';
import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

interface IProps {
  handler?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  text: string;
  btnType: ButtonType;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

const ToDoButton = ({ text, handler, btnType, buttonRef }: IProps) => {
  return (
    <St.Button onClick={handler} type={btnType} ref={buttonRef}>
      {text}
    </St.Button>
  );
};

export default ToDoButton;
