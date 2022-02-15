import { useMutation as reactUseMutation } from 'react-query';

import { Action } from 'api/types';
import { client } from 'api/client';

export function useMutation<TBody = unknown, TData = unknown>(createAction: (body: TBody) => Action) {
  return reactUseMutation<TData, unknown, TBody>(data =>
    client.request<TData>(createAction(data)).then(({ data }) => data),
  );
}
