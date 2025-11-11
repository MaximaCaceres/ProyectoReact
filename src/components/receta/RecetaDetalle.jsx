import { useParams, useNavigate } from 'react-router-dom';
import { useRecetas } from '../../contexts/RecetaContext.jsx';
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  Chip,
  Stack,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import {
  AccessTime,
  People,
  ArrowBack,
  Restaurant
} from '@mui/icons-material';
import IngredientesList from './IngredientesList.jsx';

function RecetaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecetaById, isLoading } = useRecetas();

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

  const receta = getRecetaById(id);

  if (!receta) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Receta no encontrada
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Lo sentimos, no pudimos encontrar la receta que buscas.
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
        >
          Volver al Listado
        </Button>
      </Box>
    );
  }

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
    <Box>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/')}
        sx={{ mb: 3 }}
      >
        Volver al Listado
      </Button>

      <Card>
        <CardMedia
          component="img"
          height="400"
          image={receta.imagen}
          alt={receta.titulo}
          sx={{ objectFit: 'cover' }}
        />

        <Box sx={{ p: 3 }}>
          <Typography variant="h3" gutterBottom>
            {receta.titulo}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {receta.descripcion}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: 3 }} flexWrap="wrap" useFlexGap>
            <Chip
              icon={<AccessTime />}
              label={receta.tiempoPreparacion}
              variant="outlined"
            />
            <Chip
              icon={<Restaurant />}
              label={receta.dificultad}
              color={getDificultadColor(receta.dificultad)}
            />
            <Chip
              icon={<People />}
              label={`${receta.porciones} porciones`}
              variant="outlined"
            />
          </Stack>

          <Divider sx={{ my: 3 }} />

          <IngredientesList ingredientes={receta.ingredientes} />

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom sx={{ mt: 3, mb: 2 }}>
            👨‍🍳 Preparación
          </Typography>

          <List>
            {receta.pasos.map((paso, index) => (
              <ListItem key={index} alignItems="flex-start" sx={{ mb: 2 }}>
                <ListItemText
                  primary={`Paso ${index + 1}`}
                  secondary={paso}
                  primaryTypographyProps={{
                    fontWeight: 700,
                    color: 'primary.main',
                    variant: 'body1'
                  }}
                  secondaryTypographyProps={{
                    variant: 'body1',
                    color: 'text.primary',
                    sx: { mt: 1 }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Card>
    </Box>
  );
}

export default RecetaDetalle;