import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useFakeLocale } from 'hooks';
import { FooBody } from 'api/types';
import { InputField } from 'form/fields';
import { Button } from 'ui';
import { MutateFormProps } from './MutateForm.types';
import { styles } from './MutateForm.styles';

export const MutateForm = ({ isLoading, onSubmit }: MutateFormProps) => {
  const { formatMessage } = useFakeLocale();

  const { control, handleSubmit, formState } = useForm<FooBody>({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      favoriteSpot: '',
    },
  });

  return (
    <Box component="form" sx={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        control={control}
        name="firstName"
        rules={{
          required: formatMessage('It is required...'),
          maxLength: { value: 15, message: formatMessage('Really?!? To long...') },
        }}
        label="First name"
      />
      <InputField control={control} name="lastName" label="Last name" />
      <InputField control={control} name="favoriteSpot" label="Favorite spot" />

      <Button fullWidth type="submit" size="large" disabled={!formState.isValid} isLoading={isLoading}>
        Submit
      </Button>
    </Box>
  );
};
