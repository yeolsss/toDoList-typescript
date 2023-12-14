import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  selectorModal,
  setResult,
} from '../../redux/module/modal.slice';
import ToDoButton from '../button';
import { EConfirm } from './CustomModal';
import { IProps } from './CustomModalConfirm';
import * as St from './customModal.styled';

const CustomModalAlert = ({ handler }: IProps) => {
  const { isOpen, title } = useSelector(selectorModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        e.stopPropagation();
        dispatch(setResult(true));
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, dispatch]);
  return (
    <St.ModalConfirm $IsOpen={isOpen}>
      <h1>{title || '알 수 없는 오류가 발생하였습니다.'}</h1>
      <St.ModalButtonWrapper>
        <ToDoButton
          btnType={'button'}
          text={'확인'}
          handler={(e: React.MouseEvent<HTMLButtonElement>) =>
            handler(e, EConfirm.ALERT)
          }
        />
      </St.ModalButtonWrapper>
    </St.ModalConfirm>
  );
};

export default CustomModalAlert;
