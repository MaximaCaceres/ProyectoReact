import { useRecetas } from '../../contexts/RecetaContext';
import { Grid, CircularProgress, Box } from '@mui/material';
import RecetaCard from './RecetaCard';

function RecetasList({ recetas: recetasProp }) {
  const { recetas: recetasContext, isLoading } = useRecetas();
  
  // Usar recetas pasadas por prop o las del contexto
  const recetas = recetasProp || recetasContext;

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={4}>
      {recetas.map((receta) => (
        <Grid item xs={12} sm={6} md={4} key={receta.id}>
          <RecetaCard receta={receta} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RecetasList;