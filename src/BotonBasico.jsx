import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function BotonBasico({ isDisabled }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
      <Stack direction="row" spacing={2}>
        {isDisabled ? 
          <Button disabled>Agotado</Button>
          : <Button>Comprar</Button>
        }
      </Stack>
    </Box>
  );
}
