import { Box, Grid, Typography, Paper, Avatar, Rating } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

function Testimonios() {
  const testimonios = [
    {
      nombre: 'María González',
      avatar: 'M',
      color: '#4CAF50',
      rating: 5,
      comentario: 'Las recetas son muy claras y fáciles de seguir. He preparado varias y todas han salido deliciosas. ¡Muy recomendado!',
      puesto: 'Chef Amateur'
    },
    {
      nombre: 'Carlos Rodríguez',
      avatar: 'C',
      color: '#FF9800',
      rating: 5,
      comentario: 'Excelente colección de recetas. Los tips de cocina me han ayudado a mejorar mis técnicas. La app es muy intuitiva.',
      puesto: 'Cocinero Casero'
    },
    {
      nombre: 'Ana Martínez',
      avatar: 'A',
      color: '#2196F3',
      rating: 5,
      comentario: 'Me encanta poder guardar mis recetas favoritas. La función de búsqueda es muy útil para encontrar justo lo que necesito.',
      puesto: 'Entusiasta de la Cocina'
    }
  ];

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Lo que dicen nuestros usuarios
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Miles de personas ya están cocinando con nosotros
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {testimonios.map((testimonio, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  borderColor: 'secondary.main',
                }
              }}
            >
              <FormatQuote 
                sx={{ 
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  fontSize: 40,
                  color: 'divider',
                  opacity: 0.3
                }} 
              />
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: testimonio.color,
                    width: 56,
                    height: 56,
                    mr: 2,
                    fontWeight: 600
                  }}
                >
                  {testimonio.avatar}
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {testimonio.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonio.puesto}
                  </Typography>
                </Box>
              </Box>

              <Rating value={testimonio.rating} readOnly size="small" sx={{ mb: 2 }} />

              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                "{testimonio.comentario}"
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonios;