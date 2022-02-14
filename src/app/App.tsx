import { Box } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import { FetchCard } from './fetchCard/FetchCard';
import { MutateCard } from './mutateCard/MutateCard';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Box width={400}>
        <FetchCard />
        <Box height={16} />
        <MutateCard />
      </Box>
    </QueryClientProvider>
  );
};
