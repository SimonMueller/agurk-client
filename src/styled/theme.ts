export interface Theme {
  colors: {
    primary: string;
    muted: string;
    text: string;
    error: string;
    accent: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#008000',
    muted: '#737373',
    text: '#000',
    error: '#ff033e',
    accent: '#ff4f00',
  },
};

export default theme;
