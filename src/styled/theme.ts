export interface Theme {
  colors: {
    primary: string;
    accent: string;
    muted: string;
    text: string;
    error: string;
    success: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#007fff',
    accent: '#ff007f',
    muted: '#737373',
    text: '#000',
    error: 'rgba(227, 38, 54, 0.9)',
    success: ' rgba(0, 140, 0, 0.9)',
  },
};

export default theme;
