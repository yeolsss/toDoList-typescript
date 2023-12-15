import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import {
  closeModal,
  selectorModal,
  setResult,
} from '../../redux/module/modal.slice';
import ToDoButton from '../button';
import { EConfirm } from './CustomModal';
import * as St from './customModal.styled';

export interface IProps {
  handler: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement | KeyboardEvent>,
    type: EConfirm,
  ) => void;
}

const CustomModalConfirm = ({ handler }: IProps) => {
  const { isOpen, title } = useSelector(selectorModal);
  const dispatch = useCustomDispatch();

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
