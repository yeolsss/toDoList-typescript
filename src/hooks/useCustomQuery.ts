import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useCustomQuery<T, TError extends Error = Error>(
  queryOptions: UseQueryOptions<T, TError>,
): T | undefined {
  const { isLoading, isError, error, data } = useQuery<T, TError>(queryOptions);

  useEffect(() => {}, [isLoading]);

  useEffect(() => {}, [isError, error]);

  return data;
}
