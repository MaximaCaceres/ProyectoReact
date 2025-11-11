import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
  IconButton,
  Box
} from '@mui/material';
import { AccessTime, People, Favorite, FavoriteBorder } from '@mui/icons-material';
import { useFavoritos } from '../../contexts/FavoritosContext';

function RecetaCard({ receta }) {
  const navigate = useNavigate();
  const { isFavorito, toggleFavorito } = useFavoritos();
  const esFavorito = isFavorito(receta.id);

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

  const handleFavoritoClick = (e) => {
    e.stopPropagation();
    toggleFavorito(receta);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        // ✨ Animación suave al hacer hover
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }
      }}
      onClick={() => navigate(`/recetas/${receta.id}`)}
    >
      {/* Imagen con botón de favorito */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={receta.imagen}
          alt={receta.titulo}
          sx={{ objectFit: 'cover' }}
        />
        <IconButton
          onClick={handleFavoritoClick}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            }
          }}
        >
          {esFavorito ? (
            <Favorite sx={{ color: 'secondary.main' }} />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {receta.titulo}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {receta.descripcion}
        </Typography>
        
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip
            icon={<AccessTime />}
            label={receta.tiempoPreparacion}
            size="small"
            variant="outlined"
          />
          <Chip
            label={receta.dificultad}
            size="small"
            color={getDificultadColor(receta.dificultad)}
            variant="outlined"
          />
          <Chip
            icon={<People />}
            label={`${receta.porciones} porciones`}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/recetas/${receta.id}`);
          }}
        >
          Ver Receta
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecetaCard;