import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // 🎨 MODO CLARO - MINIMALISTA
                primary: {
                  main: '#1A1A1A', // Negro suave para texto y acentos
                  light: '#333333',
                  dark: '#000000',
                },
                secondary: {
                  main: '#4CAF50', // Verde fresco y natural
                  light: '#66BB6A',
                  dark: '#388E3C',
                },
                background: {
                  default: '#F9F9F9', // Blanco suave (no puro)
                  paper: '#FFFFFF',
                },
                text: {
                  primary: '#1A1A1A',
                  secondary: '#555555',
                },
                divider: '#E0E0E0',
              }
            : {
                // 🌙 MODO OSCURO - ELEGANTE
                primary: {
                  main: '#E0E0E0', // Gris claro para texto
                  light: '#F5F5F5',
                  dark: '#BDBDBD',
                },
                secondary: {
                  main: '#66BB6A', // Verde suave
                  light: '#81C784',
                  dark: '#4CAF50',
                },
                background: {
                  default: '#121212',
                  paper: '#1E1E1E',
                },
                text: {
                  primary: '#E0E0E0',
                  secondary: '#B0B0B0',
                },
                divider: '#2C2C2C',
              }),
        },
        typography: {
          fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
          },
          h2: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
          },
          h3: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
          },
          h4: {
            fontWeight: 600,
          },
          h5: {
            fontWeight: 600,
          },
          h6: {
            fontWeight: 600,
          },
          button: {
            textTransform: 'none',
            fontWeight: 600,
          },
        },
        shape: {
          borderRadius: 8, // Bordes sutiles
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                // Sin sombra por defecto (flat design)
                boxShadow: 'none',
                border: mode === 'light' ? '1px solid #E0E0E0' : '1px solid #2C2C2C',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 8,
                padding: '10px 24px',
              },
              contained: {
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                fontWeight: 500,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: 'none',
                borderBottom: mode === 'light' ? '1px solid #E0E0E0' : '1px solid #2C2C2C',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode debe ser usado dentro de un ThemeProvider');
  }
  return context;
};