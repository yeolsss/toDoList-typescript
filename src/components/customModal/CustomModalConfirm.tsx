import * as St from './customModal.styled.ts';
import ToDoButton from '../button';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectorModal } from '../../redux/module/modal.slice.ts';
import { EConfirm } from './CustomModal.tsx';

export interface IProps {
  handler: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
    type: EConfirm,
  ) => void;
}

const CustomModalConfirm = ({ handler }: IProps) => {
  const { isOpen, title } = useSelector(selectorModal);
  return (
    <St.ModalConfirm $IsOpen={isOpen}>
      <h1>{title}</h1>
      <St.ModalButtonWrapper>
        <ToDoButton
          btnType={'button'}
          text={'취소'}
          handler={(e: React.MouseEvent<HTMLButtonElement>) =>
            handler(e, EConfirm.CANCEL)
          }
        />
        <ToDoButton
          btnType={'button'}
          text={'확인'}
          handler={(e: React.MouseEvent<HTMLButtonElement>) =>
            handler(e, EConfirm.CONFIRM)
          }
        />
      </St.ModalButtonWrapper>
    </St.ModalConfirm>
  );
};

export default CustomModalConfirm;
