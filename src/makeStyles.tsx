import { createMakeStyles } from 'tss-react';
import { useTheme } from '@mui/material';
import { Theme } from '@mui/material';

export const { makeStyles, useStyles } = createMakeStyles({
  useTheme: useTheme as () => Theme
});
