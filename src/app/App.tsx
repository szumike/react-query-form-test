import { Box } from '@mui/material';

import { FetchCard } from './fetchCard/FetchCard';
import { MutateCard } from './mutateCard/MutateCard';

export const App = () => (
  <Box width={400}>
    <FetchCard />
    <Box height={16} />
    <MutateCard />
  </Box>
);
