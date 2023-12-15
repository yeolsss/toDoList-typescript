import React from 'react';
import { useSelector } from 'react-redux';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import {
  closeModal,
  selectorModal,
  setResult,
} from '../../redux/module/modal.slice';
import CustomModalAlert from './CustomModalAlert';
import CustomModalConfirm from './CustomModalConfirm';
import * as St from './customModal.styled';

export enum EConfirm {
  CANCEL,
  CONFIRM,
  ALERT,
}

const CustomModal = () => {
  const { isOpen, modal } = useSelector(selectorModal);
  const dispatch = useCustomDispatch();
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
