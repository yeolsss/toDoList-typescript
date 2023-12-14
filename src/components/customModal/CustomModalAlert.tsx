import * as St from './customModal.styled.ts';
import ToDoButton from '../button';
import React from 'react';
import { EConfirm } from './CustomModal.tsx';
import { useSelector } from 'react-redux';
import { selectorModal } from '../../redux/module/modal.slice.ts';
import { IProps } from './CustomModalConfirm.tsx';

const CustomModalAlert = ({ handler }: IProps) => {
  const { isOpen, title } = useSelector(selectorModal);
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
