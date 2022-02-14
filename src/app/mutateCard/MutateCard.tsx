import { Box, Button, Card } from '@mui/material';

import { styles } from './MutateCard.styles';
import { Input } from '../../ui';

export const MutateCard = () => {
  return (
    <Card>
      <Box sx={styles.container}>
        <Input label="First name" />
        <Input label="Last name" />
        <Input label="Favourite spot" />

        <Button variant="contained" size="large" fullWidth>
          Submit
        </Button>
      </Box>
    </Card>
  );
};
