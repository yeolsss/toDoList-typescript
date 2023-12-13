import * as St from './toDoButton.styled';

type ButtonType = 'button' | 'submit' | 'reset';

interface IProps {
  handler?: () => void;
  text: string;
  btnType: ButtonType;
}

const ToDoButton = ({ text, handler, btnType }: IProps) => {
  return (
    <St.Button onClick={handler} type={btnType}>
      {text}
    </St.Button>
  );
};

export default ToDoButton;
