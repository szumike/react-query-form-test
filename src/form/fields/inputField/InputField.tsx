import { Controller, FieldValues } from 'react-hook-form';

import { Input } from 'ui';
import { InputFieldProps } from './InputField.types';

export function InputField<T extends FieldValues>({ name, control, rules, ...props }: InputFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Input {...props} {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
      )}
    />
  );
}
