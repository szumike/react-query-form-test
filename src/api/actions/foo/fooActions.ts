import { Action } from '../../types';
import { FooBody } from './foo.types';

export const createGetFoo = (): Action => ({
  method: 'GET',
  url: '/foo',
});

export const createAddFoo = (body: FooBody): Action => ({
  method: 'POST',
  url: '/foo',
  data: body,
});
