import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useCustomQuery<T, TError extends Error = Error>(
  queryOptions: UseQueryOptions<T, TError>,
): T | undefined {
  const { isLoading, isError, error, data } = useQuery<T, TError>(queryOptions);

  useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log('isError', error?.message);
  }, [isError, error]);

  return data;
}
