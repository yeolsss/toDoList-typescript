import { openModal } from '../redux/module/modal.slice';
import store from '../redux/storeConfig';
import { useCustomDispatch } from './useCustomDispatch';

export const useCustomModal = () => {
  const dispatch = useCustomDispatch();

  const handleOpenModal = (title: string, modalType: string) => {
    return new Promise((res) => {
      dispatch(openModal({ modal: modalType, title }));

      const unsubscribe = store.subscribe(() => {
        const result = store.getState().modal.result;
        res(result);
        unsubscribe();
      });
    });
  };
  return { handleOpenModal };
};
