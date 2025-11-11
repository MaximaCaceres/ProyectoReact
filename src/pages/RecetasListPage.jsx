import { useState } from 'react';
import { Container, Typography, Box, Fade, Chip, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useRecetas } from '../contexts/RecetaContext';
import RecetasList from '../components/receta/RecetasList';
import { Search, FilterList } from '@mui/icons-material';

function RecetasListPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');
  const { recetas } = useRecetas();
  const [filtroDificultad, setFiltroDificultad] = useState('Todas');

  const handleFiltroChange = (event, newFiltro) => {
    if (newFiltro !== null) {
      setFiltroDificultad(newFiltro);
    }
  };

  // PASO 1: Filtrar por búsqueda
  let recetasFiltradas = query 
    ? recetas.filter(receta => 
        receta.titulo.toLowerCase().includes(query.toLowerCase()) ||
        receta.descripcion.toLowerCase().includes(query.toLowerCase()) ||
        receta.categoria.toLowerCase().includes(query.toLowerCase())
      )
    : recetas;

  // PASO 2: Filtrar por dificultad
  if (filtroDificultad !== 'Todas') {
    recetasFiltradas = recetasFiltradas.filter(
      receta => receta.dificultad === filtroDificultad
    );
  }

  return (
    <Fade in={true} timeout={600}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            {query ? 'Resultados de Búsqueda' : 'Nuestras Recetas'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {query ? (
              <>
                Mostrando resultados para: <strong>"{query}"</strong>
              </>
            ) : (
              'Descubre una colección de deliciosas recetas para preparar en casa'
            )}
          </Typography>
          
          {query && (
            <Box sx={{ mt: 2 }}>
              <Chip 
                icon={<Search />}
                label={`${recetasFiltradas.length} ${recetasFiltradas.length === 1 ? 'receta encontrada' : 'recetas encontradas'}`}
                color="secondary"
                variant="outlined"
              />
            </Box>
          )}
        </Box>

        {/* Filtros de Dificultad */}
        <Box 
          sx={{ 
            mb: 4, 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FilterList />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Filtrar por:
            </Typography>
          </Box>
          
          <ToggleButtonGroup
            value={filtroDificultad}
            exclusive
            onChange={handleFiltroChange}
            aria-label="filtro de dificultad"
            size="small"
            sx={{
              '& .MuiToggleButton-root': {
                textTransform: 'none',
                fontWeight: 500,
                px: 3,
                '&.Mui-selected': {
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  }
                }
              }
            }}
          >
            <ToggleButton value="Todas">
              Todas
            </ToggleButton>
            <ToggleButton value="Fácil">
              Fácil
            </ToggleButton>
            <ToggleButton value="Media">
              Media
            </ToggleButton>
            <ToggleButton value="Difícil">
              Difícil
            </ToggleButton>
          </ToggleButtonGroup>

          <Typography variant="body2" color="text.secondary">
            ({recetasFiltradas.length} {recetasFiltradas.length === 1 ? 'receta' : 'recetas'})
          </Typography>
        </Box>

        {/* Resultados */}
        {recetasFiltradas.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" gutterBottom color="text.secondary">
              No se encontraron recetas
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Intenta con otro término de búsqueda o filtro
            </Typography>
          </Box>
        ) : (
          <RecetasList recetas={recetasFiltradas} />
        )}
      </Container>
    </Fade>
  );
}

export default RecetasListPage;