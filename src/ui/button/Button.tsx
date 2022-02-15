import { CircularProgress, Button as MuiButton } from '@mui/material';

import { ButtonProps } from './Button.types';

export const Button = ({ isLoading, disabled, children, ...props }: ButtonProps) => (
  <MuiButton variant="contained" {...props} disabled={disabled || isLoading}>
    {isLoading ? <CircularProgress size={24} /> : children}
  </MuiButton>
);
