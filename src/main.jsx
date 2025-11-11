import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RecetasProvider } from './contexts/RecetaContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { FavoritosProvider } from './contexts/FavoritosContext.jsx';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RecetasProvider>
          <FavoritosProvider>
            <CssBaseline />
            <App />
          </FavoritosProvider>
        </RecetasProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);