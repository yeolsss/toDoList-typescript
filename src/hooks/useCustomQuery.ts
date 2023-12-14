import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setLoading } from '../redux/module/loading.slice.ts';
import { useDispatch } from 'react-redux';
import { useCustomModal } from './useCustomModal.ts';

export function useCustomQuery<T, TError extends Error = Error>(
  queryOptions: UseQueryOptions<T, TError>,
): T | undefined {
  const dispatch = useDispatch();
  const { handleOpenModalAlert } = useCustomModal();
  const { isLoading, isError, error, data } = useQuery<T, TError>(queryOptions);

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (isError) {
      handleOpenModalAlert(error?.message);
    }
  }, [isError, error, handleOpenModalAlert]);

  return data;
}
