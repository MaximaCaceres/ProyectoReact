import { Container, Box, Typography, Button, Fade, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Restaurant, ArrowForward, Favorite, Search, Kitchen } from '@mui/icons-material';
import RecetaDelDia from '../components/receta/RecetaDelDia';
import TipsCocina from '../components/receta/TipsCocina';
import Testimonios from '../components/receta/Testimonios';
import Estadisticas from '../components/receta/Estadisticas';

function InicioPage() {
  const navigate = useNavigate();

  const caracteristicas = [
    {
      icon: <Search sx={{ fontSize: 40, color: 'secondary.main' }} />,
      titulo: 'Búsqueda Avanzada',
      descripcion: 'Encuentra la receta perfecta con nuestro potente buscador y filtros por dificultad.'
    },
    {
      icon: <Favorite sx={{ fontSize: 40, color: 'secondary.main' }} />,
      titulo: 'Guarda tus Favoritos',
      descripcion: 'Marca tus recetas preferidas y tenlas siempre a mano cuando las necesites.'
    },
    {
      icon: <Kitchen sx={{ fontSize: 40, color: 'secondary.main' }} />,
      titulo: 'Tips de Expertos',
      descripcion: 'Aprende técnicas y secretos de cocina con nuestros consejos profesionales.'
    }
  ];

  return (
    <Fade in={true} timeout={600}>
      <Box>
        {/* Hero Section - Mejorado */}
        <Box 
          sx={{ 
            background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.02) 100%)',
            py: { xs: 6, md: 10 },
            mb: 8
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Restaurant sx={{ fontSize: 50, color: 'secondary.main', mr: 2 }} />
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      color: 'secondary.main', 
                      fontWeight: 600,
                      fontSize: '1rem',
                      letterSpacing: 2
                    }}
                  >
                    BIENVENIDO
                  </Typography>
                </Box>
                <Typography 
                  variant="h2" 
                  component="h1" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                  }}
                >
                  Descubre el placer de cocinar
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary" 
                  sx={{ mb: 4, lineHeight: 1.8, maxWidth: '500px' }}
                >
                  Explora cientos de recetas deliciosas, desde platos rápidos hasta creaciones gourmet. 
                  Todo lo que necesitas para convertirte en un maestro de la cocina.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/recetas')}
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      fontSize: '1.1rem'
                    }}
                  >
                    Explorar Recetas
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => navigate('/tips')}
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      fontSize: '1.1rem'
                    }}
                  >
                    Ver Tips
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=600&fit=crop"
                  alt="Cocina"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg">
          {/* Estadísticas */}
          <Box sx={{ mb: 8 }}>
            <Estadisticas />
          </Box>

          {/* Receta del Día */}
          <Box sx={{ mb: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Receta Destacada
              </Typography>
              <Typography variant="body1" color="text.secondary">
                La mejor receta para preparar hoy
              </Typography>
            </Box>
            <RecetaDelDia />
          </Box>

          {/* Características */}
          <Box sx={{ mb: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                ¿Por qué elegirnos?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Las mejores herramientas para tu cocina
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {caracteristicas.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: 'secondary.main',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      }
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {item.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.descripcion}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Tips de Cocina */}
          <Box sx={{ mb: 8 }}>
            <TipsCocina />
          </Box>

          {/* Testimonios */}
          <Box sx={{ mb: 8 }}>
            <Testimonios />
          </Box>

          {/* Call to Action Final */}
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 8,
              px: 3,
              background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
              borderRadius: 3,
              border: '2px solid',
              borderColor: 'secondary.main',
              mb: 4
            }}
          >
            <Restaurant sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              ¿Listo para empezar?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
              Únete a miles de cocineros caseros que ya están creando platos increíbles
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/recetas')}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Ver Todas las Recetas
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/favoritos')}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Mis Favoritos
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
}

export default InicioPage;