import { Box, Grid, Paper, Typography } from '@mui/material';
import { Restaurant, People, Star, TrendingUp } from '@mui/icons-material';

function Estadisticas() {
  const stats = [
    {
      icon: <Restaurant sx={{ fontSize: 40, color: 'secondary.main' }} />,
      valor: '100+',
      label: 'Recetas Disponibles'
    },
    {
      icon: <People sx={{ fontSize: 40, color: 'secondary.main' }} />,
      valor: '5,000+',
      label: 'Usuarios Activos'
    },
    {
      icon: <Star sx={{ fontSize: 40, color: 'secondary.main' }} />,
      valor: '4.8',
      label: 'Calificación Promedio'
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: 'secondary.main' }} />,
      valor: '50+',
      label: 'Tips de Cocina'
    }
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={6} md={3} key={index}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              textAlign: 'center',
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: 'secondary.main',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }
            }}
          >
            <Box sx={{ mb: 2 }}>
              {stat.icon}
            </Box>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 0.5,
                color: 'text.primary'
              }}
            >
              {stat.valor}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Estadisticas;