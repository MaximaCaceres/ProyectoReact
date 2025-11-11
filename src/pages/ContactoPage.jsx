import { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Paper,
  Grid,
  Alert,
  Fade
} from '@mui/material';
import { ContactMail, Send, Email, Person, Message } from '@mui/icons-material';

function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de envío
    setEnviado(true);
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setFormData({ nombre: '', email: '', mensaje: '' });
      setEnviado(false);
    }, 3000);
  };

  return (
    <Fade in={true} timeout={600}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Información de contacto */}
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4 }}>
              <ContactMail sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Contáctanos
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  📧 Email
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  contacto@recetas.com
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  🕒 Horario de Atención
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 10:00 - 14:00
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  📱 Redes Sociales
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @recetasapp en todas las plataformas
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Formulario */}
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4,
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              {enviado && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  ¡Mensaje enviado con éxito! Te responderemos pronto.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                  name="nombre"
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />

                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />

                <TextField
                  name="mensaje"
                  label="Mensaje"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: <Message sx={{ mr: 1, color: 'text.secondary', alignSelf: 'flex-start', mt: 1 }} />
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  endIcon={<Send />}
                  disabled={!formData.nombre || !formData.email || !formData.mensaje}
                  sx={{ py: 1.5 }}
                >
                  Enviar Mensaje
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Sección de FAQ */}
        <Box 
          sx={{ 
            mt: 6, 
            p: 3, 
            backgroundColor: 'background.paper',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Preguntas Frecuentes
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                ¿Cómo puedo sugerir una receta?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Envíanos un mensaje con los detalles de tu receta y la revisaremos.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                ¿Puedo reportar un error?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ¡Por supuesto! Utiliza el formulario para reportar cualquier problema.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fade>
  );
}

export default ContactoPage;