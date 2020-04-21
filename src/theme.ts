import { createMuiTheme, responsiveFontSizes, Theme as MuiTheme } from '@material-ui/core';

export type Severity = 'warning' | 'info' | 'error' | 'success';

export type Theme = MuiTheme;

const theme: Theme = createMuiTheme({
  typography: {
    h1: { fontSize: '3rem' },
    h2: { fontSize: '2.25rem' },
    h3: { fontSize: '1.75rem' },
    h4: { fontSize: '1.5rem' },
    h5: { fontSize: '1.25rem' },
    h6: { fontSize: '1rem' },
  },
  palette: {
    primary: {
      light: '#48a999',
      main: '#00695c',
      dark: '#004c40',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9162e4',
      main: '#5e35b1',
      dark: '#280680',
      contrastText: '#fff',
    },
    error: {
      light: '#ff5131',
      main: '#d50000',
      dark: '#9b0000',
      contrastText: '#fff',
    },
    warning: {
      light: '#ff7539',
      main: '#ff3d00',
      dark: '#c30000',
      contrastText: '#000',
    },
    info: {
      light: '#48a999',
      main: '#00695c',
      dark: '#004c40',
      contrastText: '#fff',
    },
    success: {
      light: '#5efc82',
      main: '#00c853',
      dark: '#009624',
      contrastText: '#000',
    },
  },
});

export default responsiveFontSizes(theme);
