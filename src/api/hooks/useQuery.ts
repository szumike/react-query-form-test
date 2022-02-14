import { useQuery as reactUseQuery, QueryKey, UseQueryOptions, UseQueryResult } from 'react-query';

import { Action } from '../types';
import { client } from '../client';

export function useQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  action: Action,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
): UseQueryResult<TData, TError> {
  return reactUseQuery<TQueryFnData, TError, TData, TQueryKey>(
    // @ts-ignore
    action.url,
    () => client.request<TQueryFnData>(action).then(({ data }) => data),
    {
      refetchOnWindowFocus: false,
      ...(options ?? {}),
    },
  );
}
