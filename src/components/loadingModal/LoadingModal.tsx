import { useSelector } from 'react-redux';
import { selectorIsLoading } from '../../redux/module/loading.slice';
import * as St from './loadingModal.styled';

const LoadingModal = () => {
  const selectIsLoading = useSelector(selectorIsLoading);
  return (
    <St.ModalBackground $IsLoading={selectIsLoading}>
      <St.LoadingSpinner
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, loop: Infinity, ease: 'linear' }}
      />
    </St.ModalBackground>
  );
};

export default LoadingModal;
