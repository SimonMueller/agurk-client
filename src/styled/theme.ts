export interface Theme {
  colors: {
    primary: string;
    muted: string;
    text: string;
    error: string;
    warn: string;
    success: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#2a52be',
    muted: '#737373',
    text: '#000',
    error: '#ff033e',
    warn: '#ff4f00',
    success: 'rgba(0, 140, 0, 0.9)',
  },
};

export default theme;
