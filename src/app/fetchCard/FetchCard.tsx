import { Box, Card } from '@mui/material';

import { useQuery } from 'api/hooks';
import { createGetFooAction } from 'api/actions/foo/fooActions';
import { GetFooResponse } from 'api/types';
import { Button, Snackbar } from 'ui';

export const FetchCard = () => {
  const { isLoading, data, refetch, remove } = useQuery<GetFooResponse>(createGetFooAction(), {
    refetchOnMount: false,
    enabled: false,
  });

  return (
    <Card>
      <Box p={3} display="flex" justifyContent="center">
        <Button
          isLoading={isLoading}
          onClick={async () => {
            remove();
            refetch();
          }}
        >
          Fetch data
        </Button>
      </Box>

      <Snackbar text={data} />
    </Card>
  );
};
