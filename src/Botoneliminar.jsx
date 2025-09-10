import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Alerta from './Alerta';
import AlertaEliminar from './AlertaEliminar';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1} display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
      <AlertaEliminar />
      <IconButton>
        <Alerta/>
      </IconButton>
    </Stack>
  );
}

