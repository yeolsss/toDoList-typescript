import * as St from './customModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  selectorModal,
  setResult,
} from '../../redux/module/modal.slice.ts';
import React from 'react';
import CustomModalConfirm from './CustomModalConfirm.tsx';
import CustomModalAlert from './CustomModalAlert.tsx';

export enum EConfirm {
  CANCEL,
  CONFIRM,
  ALERT,
}

const CustomModal = () => {
  const { isOpen, modal } = useSelector(selectorModal);
  const dispatch = useDispatch();
  const handleOnClick = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement | KeyboardEvent>,
    type: EConfirm,
  ) => {
    e.stopPropagation();
    if (e.currentTarget !== e.target) return;

    if (type === EConfirm.CONFIRM || type === EConfirm.ALERT)
      dispatch(setResult(true));
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
      {modal === 'confirm' ? (
        <CustomModalConfirm handler={handleOnClick} />
      ) : (
        <CustomModalAlert handler={handleOnClick} />
      )}
    </St.ModalWrapper>
  );
};

export default CustomModal;
