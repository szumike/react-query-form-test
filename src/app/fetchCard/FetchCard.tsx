import { Box, Button, Card } from '@mui/material';

export const FetchCard = () => {
  return (
    <Card>
      <Box p={3} display="flex" justifyContent="center">
        <Button variant="contained">Fetch data</Button>
      </Box>
    </Card>
  );
};
