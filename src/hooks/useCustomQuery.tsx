import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export function useCustomQuery<T, TError = Error>(
  queryOptions: UseQueryOptions<T, TError>,
): [boolean, boolean, TError | undefined, T | undefined] {
  const { isLoading, isError, error, data } = useQuery<T, TError>(queryOptions);
  return [isLoading, isError, error!, data];
}
