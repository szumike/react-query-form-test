import { Card } from '@mui/material';

import { useMutation } from 'api/hooks';
import { FooBody } from 'api/types';
import { createAddFooAction } from 'api/actions/foo/fooActions';
import { Snackbar } from 'ui';
import { MutateForm } from './mudateForm/MutateForm';

export const MutateCard = () => {
  const { isLoading, mutate, isSuccess } = useMutation<FooBody>(createAddFooAction);

  return (
    <Card>
      <MutateForm isLoading={isLoading} onSubmit={mutate} />
      <Snackbar text={isSuccess ? 'Foo created successfully' : undefined} />
    </Card>
  );
};
