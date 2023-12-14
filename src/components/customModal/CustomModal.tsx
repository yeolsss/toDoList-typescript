import * as St from './customModal.styled';
import ToDoButton from '../button';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  selectorModal,
  setResult,
} from '../../redux/module/modal.slice.ts';
import React from 'react';

enum EConfirm {
  CANCEL,
  CONFIRM,
}

const CustomModal = () => {
  const dispatch = useDispatch();
  const { isOpen, title } = useSelector(selectorModal);
  const handleOnClick = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
    type: EConfirm,
  ) => {
    if (e.currentTarget !== e.target) return;
    if (type) dispatch(setResult(true));
    else dispatch(setResult(false));
    dispatch(closeModal());
  };
  return (
    <St.ModalWrapper
      $IsOpen={isOpen}
      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
        handleOnClick(e, EConfirm.CANCEL)
      }
    >
      <St.ModalMain $IsOpen={isOpen}>
        <h1>{title}</h1>
        <St.ModalButtonWrapper>
          <ToDoButton
            btnType={'button'}
            text={'취소'}
            handler={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleOnClick(e, EConfirm.CANCEL)
            }
          />
          <ToDoButton
            btnType={'button'}
            text={'확인'}
            handler={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleOnClick(e, EConfirm.CONFIRM)
            }
          />
        </St.ModalButtonWrapper>
      </St.ModalMain>
    </St.ModalWrapper>
  );
};

export default CustomModal;
