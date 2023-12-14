import * as St from './customModal.styled';
import ToDoButton from '../button';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  selectorModal,
  setResult,
} from '../../redux/module/modal.slice.ts';

enum EConfirm {
  CANCEL,
  CONFIRM,
}

const CustomModal = () => {
  const dispatch = useDispatch();
  const { isOpen, title } = useSelector(selectorModal);
  const handleOnClick = (type: EConfirm) => {
    if (type) dispatch(setResult(true));
    else dispatch(setResult(false));
    dispatch(closeModal());
  };
  return (
    <St.ModalWrapper $IsOpen={isOpen}>
      <St.ModalMain $IsOpen={isOpen}>
        <h1>{title}</h1>
        <St.ModalButtonWrapper>
          <ToDoButton
            btnType={'button'}
            text={'취소'}
            handler={() => handleOnClick(EConfirm.CANCEL)}
          />
          <ToDoButton
            btnType={'button'}
            text={'확인'}
            handler={() => handleOnClick(EConfirm.CONFIRM)}
          />
        </St.ModalButtonWrapper>
      </St.ModalMain>
    </St.ModalWrapper>
  );
};

export default CustomModal;
