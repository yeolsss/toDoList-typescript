import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setLoading } from '../redux/module/loading.slice';
import { useCustomDispatch } from './useCustomDispatch';
import { useCustomModal } from './useCustomModal';

export type TMutationOptions<T> = UseMutationOptions<
  unknown,
  Error,
  T,
  unknown
>;

export const useCustomMutation = <T>(mutationOptions: TMutationOptions<T>) => {
  const dispatch = useCustomDispatch();
  const { handleOpenModal } = useCustomModal();
  const { isPending, isError, error, mutate } = useMutation<
    unknown,
    Error,
    T,
    unknown
  >(mutationOptions);

  useEffect(() => {
    dispatch(setLoading({ isLoading: isPending }));
  }, [isPending, dispatch]);

  useEffect(() => {
    if (isError) {
      (async () => {
        await handleOpenModal(error?.message, 'alert');
      })();
    }
  }, [isError, error, handleOpenModal]);

  return mutate;
};
