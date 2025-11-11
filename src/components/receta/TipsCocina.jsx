import { Box, Grid, Typography, Paper } from '@mui/material';
import { Lightbulb, Kitchen, LocalFireDepartment, Timer } from '@mui/icons-material';

function TipsCocina() {
  const tips = [
    {
      icon: <Kitchen sx={{ fontSize: 40, color: 'secondary.main' }} />,
      titulo: 'Cuchillos Afilados',
      descripcion: 'Un cuchillo bien afilado es más seguro y hace que cortar sea mucho más fácil. Afila tus cuchillos regularmente para mejores resultados.'
    },
    {
      icon: <LocalFireDepartment sx={{ fontSize: 40, color: 'secondary.main' }} />,
      titulo: 'El Secreto del Sofrito',
      descripcion: 'Un buen sofrito es la base de muchos platos. Cocina a fuego medio-bajo y ten paciencia, los sabores se desarrollan con el tiempo.'
    },
    {
      icon: <Timer sx={{ fontSize: 40, color: 'secondary.main' }} />,
      titulo: 'Mise en Place',
      descripcion: 'Prepara todos tus ingredientes antes de empezar a cocinar. Esta técnica francesa te ayudará a cocinar de manera más eficiente y organizada.'
    }
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <Lightbulb sx={{ fontSize: 32, color: 'secondary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Consejos Rápidos
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {tips.map((tip, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  borderColor: 'secondary.main',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {tip.icon}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {tip.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tip.descripcion}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TipsCocina;