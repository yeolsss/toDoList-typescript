import * as St from './customModal.styled.ts';
import ToDoButton from '../button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  selectorModal,
  setResult,
} from '../../redux/module/modal.slice.ts';
import { EConfirm } from './CustomModal.tsx';

export interface IProps {
  handler: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement | KeyboardEvent>,
    type: EConfirm,
  ) => void;
}

const CustomModalConfirm = ({ handler }: IProps) => {
  const { isOpen, title } = useSelector(selectorModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') dispatch(setResult(true));
      else dispatch(setResult(false));

      dispatch(closeModal());
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
