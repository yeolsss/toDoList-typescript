import { useDispatch } from 'react-redux';
import { openModal } from '../redux/module/modal.slice.ts';
import store from '../redux/storeConfig.ts';

export const useCustomModal = () => {
  const dispatch = useDispatch();

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
