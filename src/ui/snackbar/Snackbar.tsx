import { useEffect, useState } from 'react';
import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

import { SnackbarProps } from './Snackbar.types';

export const Snackbar = ({ text }: SnackbarProps) => {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (!!text) {
      setSnackbarOpen(true);
    }
  }, [text]);

  return (
    <MuiSnackbar open={isSnackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
      <Alert severity="success" sx={{ width: '100%' }}>
        {text}
      </Alert>
    </MuiSnackbar>
  );
};
