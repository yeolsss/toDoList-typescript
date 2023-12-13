import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export function useCustomQuery<TData, TError = Error>(
  queryOptions: UseQueryOptions<TData, TError>,
): [boolean, boolean, TError | undefined, TData | undefined] {
  const { isLoading, isError, error, data } = useQuery<TData, TError>(
    queryOptions,
  );
  return [isLoading, isError, error!, data];
}
