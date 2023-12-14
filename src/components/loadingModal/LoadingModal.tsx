import { LoadingSpinner, ModalBackground } from './loadingModal.styled';
import { useSelector } from 'react-redux';
import { selectorIsLoading } from '../../redux/module/loading.slice.ts';

const LoadingModal = () => {
  const selectIsLoading = useSelector(selectorIsLoading);
  return (
    <ModalBackground $IsLoading={selectIsLoading}>
      <LoadingSpinner
        animate={{ rotate: 360 }}
        transition={{ duration: 2, loop: Infinity, ease: 'linear' }}
      />
    </ModalBackground>
  );
};

export default LoadingModal;
