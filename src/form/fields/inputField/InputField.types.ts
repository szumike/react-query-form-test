import { FieldValues, UseControllerProps } from 'react-hook-form';

import { InputProps } from 'ui/input/Input.types';

export type InputFieldProps<T extends FieldValues> = InputProps &
  Pick<UseControllerProps<T>, 'name' | 'control' | 'rules'>;
