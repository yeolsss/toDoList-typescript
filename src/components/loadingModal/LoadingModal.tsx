import { useSelector } from 'react-redux';
import { selectorIsLoading } from '../../redux/module/loading.slice';
import { LoadingSpinner, ModalBackground } from './loadingModal.styled';

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
