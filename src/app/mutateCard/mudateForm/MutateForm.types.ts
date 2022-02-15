import { FooBody } from 'api/types';

export type MutateFormProps = {
  isLoading: boolean;
  onSubmit: (values: FooBody) => void;
};
