export interface Theme {
  colors: {
    primary: string;
    muted: string;
    text: string;
    error: string;
    accent: string;
  };
  breakpoints: {
    minWidth: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#006a4e',
    muted: '#737373',
    text: '#000',
    error: '#ff033e',
    accent: '#ff2400',
  },
  breakpoints: {
    minWidth: '800px',
  },
};

export default theme;
