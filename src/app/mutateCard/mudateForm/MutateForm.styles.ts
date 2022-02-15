import { SxProps } from '@mui/material';

export const styles: Record<string, SxProps> = {
  container: {
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    '& > :not(:last-child)': {
      mb: 2,
    },
  },
};
