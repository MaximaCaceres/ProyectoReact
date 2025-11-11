import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import InicioPage from './pages/InicioPage';
import RecetasListPage from './pages/RecetasListPage';
import RecetaDetallePage from './pages/RecetaDetallePage';
import FavoritosPage from './pages/FavoritosPage';
import TipsPage from './pages/TipsPage';
import ContactoPage from './pages/ContactoPage';
import LoginPage from './pages/login';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <InicioPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recetas"
          element={
            <ProtectedRoute>
              <RecetasListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recetas/:id"
          element={
            <ProtectedRoute>
              <RecetaDetallePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favoritos"
          element={
            <ProtectedRoute>
              <FavoritosPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tips"
          element={
            <ProtectedRoute>
              <TipsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacto"
          element={
            <ProtectedRoute>
              <ContactoPage />
            </ProtectedRoute>
          }
        />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;