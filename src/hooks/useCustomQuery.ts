import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setLoading } from '../redux/module/loading.slice';
import { useCustomDispatch } from './useCustomDispatch';
import { useCustomModal } from './useCustomModal';

export function useCustomQuery<T, TError extends Error = Error>(
  queryOptions: UseQueryOptions<T, TError>,
): T | undefined {
  const dispatch = useCustomDispatch();
  const { handleOpenModal } = useCustomModal();
  const { isLoading, isError, error, data } = useQuery<T, TError>(queryOptions);

  useEffect(() => {
    dispatch(setLoading({ isLoading: isLoading }));
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (isError) {
      (async () => {
        await handleOpenModal(error?.message, 'alert');
      })();
    }
  }, [isError, error, handleOpenModal]);

  return data;
}
