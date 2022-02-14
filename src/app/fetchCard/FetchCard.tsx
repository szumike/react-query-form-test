import { Alert, Box, Button, Card, CircularProgress, Snackbar } from '@mui/material';

import { useQuery } from 'api/hooks';
import { createGetFoo } from 'api/actions/foo/fooActions';
import { GetFooResponse } from 'api/types';

export const FetchCard = () => {
  const { isLoading, data, refetch } = useQuery<GetFooResponse>(createGetFoo(), {
    refetchOnMount: false,
    enabled: false,
  });

  return (
    <Card>
      <Box p={3} display="flex" justifyContent="center">
        <Button
          variant="contained"
          disabled={isLoading || !!data}
          onClick={async () => {
            refetch();
          }}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Fetch data'}
        </Button>

        <Snackbar open={!!data}>
          <Alert severity="success" sx={{ width: '100%' }}>
            {data}
          </Alert>
        </Snackbar>
      </Box>
    </Card>
  );
};
