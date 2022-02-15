import { Action } from '../../types';
import { FooBody } from './foo.types';

export const createGetFooAction = (): Action => ({
  method: 'GET',
  url: '/foo',
});

export const createAddFooAction = (body: FooBody): Action => ({
  method: 'POST',
  url: '/foo',
  data: body,
});
