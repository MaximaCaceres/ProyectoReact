import { Box, Grid, Typography, Button, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRecetas } from '../../contexts/RecetaContext';
import { AccessTime, People, Restaurant, TrendingUp } from '@mui/icons-material';

function RecetaDelDia() {
  const { recetas, isLoading } = useRecetas();
  const navigate = useNavigate();

  if (isLoading || recetas.length === 0) {
    return null;
  }

  // Obtener la primera receta como "Receta del Día"
  const recetaDestacada = recetas[0];

  const getDificultadColor = (dificultad) => {
    switch (dificultad) {
      case 'Fácil':
        return 'success';
      case 'Media':
        return 'warning';
      case 'Difícil':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Grid container>
        {/* Contenido a la IZQUIERDA */}
        <Grid item xs={12} md={5}>
          <Box 
            sx={{ 
              p: { xs: 3, md: 4 }, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <TrendingUp sx={{ color: 'secondary.main' }} />
              <Typography 
                variant="overline" 
                sx={{ 
                  color: 'secondary.main', 
                  fontWeight: 600,
                  letterSpacing: 1
                }}
              >
                Receta Destacada del Día
              </Typography>
            </Box>

            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: 2
              }}
            >
              {recetaDestacada.titulo}
            </Typography>

            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ mb: 3, lineHeight: 1.8 }}
            >
              {recetaDestacada.descripcion}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mb: 3 }} flexWrap="wrap" useFlexGap>
              <Chip
                icon={<AccessTime />}
                label={recetaDestacada.tiempoPreparacion}
                size="medium"
                variant="outlined"
              />
              <Chip
                icon={<Restaurant />}
                label={recetaDestacada.dificultad}
                size="medium"
                color={getDificultadColor(recetaDestacada.dificultad)}
              />
              <Chip
                icon={<People />}
                label={`${recetaDestacada.porciones} porciones`}
                size="medium"
                variant="outlined"
              />
            </Stack>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate(`/recetas/${recetaDestacada.id}`)}
              sx={{ 
                py: 1.5,
                width: { xs: '100%', sm: 'auto' }
              }}
            >
              Ver Receta Completa
            </Button>
          </Box>
        </Grid>

        {/* Imagen a la DERECHA */}
        <Grid item xs={12} md={7}>
          <Box
            component="img"
            src={recetaDestacada.imagen}
            alt={recetaDestacada.titulo}
            sx={{
              width: '100%',
              height: { xs: '300px', md: '100%' },
              minHeight: { md: '450px' },
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default RecetaDelDia;