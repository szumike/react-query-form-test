import { Box, Button, Card } from '@mui/material';

import { Input } from 'ui';
import { styles } from './MutateCard.styles';

export const MutateCard = () => {
  return (
    <Card>
      <Box sx={styles.container}>
        <Input label="First name" />
        <Input label="Last name" />
        <Input label="Favorite spot" />

        <Button variant="contained" size="large" fullWidth>
          Submit
        </Button>
      </Box>
    </Card>
  );
};
