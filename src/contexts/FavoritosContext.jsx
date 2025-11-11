import { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext(null);

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    // Cargar favoritos desde localStorage al iniciar
    const savedFavoritos = localStorage.getItem('favoritos');
    return savedFavoritos ? JSON.parse(savedFavoritos) : [];
  });

  // Guardar en localStorage cada vez que cambien los favoritos
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Verificar si una receta es favorita
  const isFavorito = (recetaId) => {
    return favoritos.some(fav => fav.id === recetaId);
  };

  // Agregar o quitar de favoritos
  const toggleFavorito = (receta) => {
    setFavoritos(prevFavoritos => {
      const existe = prevFavoritos.some(fav => fav.id === receta.id);
      
      if (existe) {
        // Quitar de favoritos
        return prevFavoritos.filter(fav => fav.id !== receta.id);
      } else {
        // Agregar a favoritos
        return [...prevFavoritos, receta];
      }
    });
  };

  // Limpiar todos los favoritos
  const clearFavoritos = () => {
    setFavoritos([]);
  };

  const value = {
    favoritos,
    isFavorito,
    toggleFavorito,
    clearFavoritos,
    totalFavoritos: favoritos.length
  };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos debe ser usado dentro de un FavoritosProvider');
  }
  return context;
};