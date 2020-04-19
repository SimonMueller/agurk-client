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
});

export default responsiveFontSizes(theme);
