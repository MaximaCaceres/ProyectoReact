import { Container, Typography, Box, Grid, Button, Fade } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useFavoritos } from '../contexts/FavoritosContext.jsx';
import RecetaCard from '../components/receta/RecetaCard.jsx';

function FavoritosPage() {
  const { favoritos, totalFavoritos } = useFavoritos();

  return (
    <Fade in={true} timeout={600}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 2 }}>
            <Favorite sx={{ fontSize: 40, color: 'secondary.main' }} />
            <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
              Mis Favoritos
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            {totalFavoritos === 0 
              ? 'Aún no tienes recetas favoritas'
              : `Tienes ${totalFavoritos} ${totalFavoritos === 1 ? 'receta favorita' : 'recetas favoritas'}`
            }
          </Typography>
        </Box>

        {/* Lista de Favoritos */}
        {totalFavoritos === 0 ? (
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 8,
              px: 2
            }}
          >
            <FavoriteBorder 
              sx={{ 
                fontSize: 120, 
                color: 'text.disabled',
                mb: 3
              }} 
            />
            <Typography variant="h5" gutterBottom color="text.secondary">
              No hay recetas favoritas todavía
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Explora nuestras recetas y agrega tus favoritas haciendo clic en el corazón
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              href="/recetas"
              size="large"
            >
              Explorar Recetas
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {favoritos.map((receta) => (
              <Grid item xs={12} sm={6} md={4} key={receta.id}>
                <RecetaCard receta={receta} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Fade>
  );
}

export default FavoritosPage;