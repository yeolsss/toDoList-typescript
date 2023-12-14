import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/module/loading.slice.ts';
import { useCustomModal } from './useCustomModal.ts';

export type TMutationOptions<T> = UseMutationOptions<
  unknown,
  Error,
  T,
  unknown
>;
export const useCustomMutation = <T>(mutationOptions: TMutationOptions<T>) => {
  const dispatch = useDispatch();
  const { handleOpenModalAlert } = useCustomModal();
  const { isPending, isError, error, mutate } = useMutation<
    unknown,
    Error,
    T,
    unknown
  >(mutationOptions);

  useEffect(() => {
    dispatch(setLoading(isPending));
  }, [isPending, dispatch]);

  useEffect(() => {
    if (isError) {
      handleOpenModalAlert(error?.message);
    }
  }, [isError, error, handleOpenModalAlert]);

  return mutate;
};
