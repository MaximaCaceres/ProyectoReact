import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Fade } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Kitchen, LocalFireDepartment, SetMeal, Restaurant, Whatshot, AccessTime } from '@mui/icons-material';

function TipsPage() {
  const tips = [
    {
      icon: '🔥',
      titulo: 'Al Horno',
      icono: <LocalFireDepartment />,
      consejos: [
        'Precalienta siempre el horno al menos 10-15 minutos antes. Es el paso más importante para una cocción uniforme.',
        'Usa la rejilla del medio para una cocción uniforme, a menos que la receta indique lo contrario.',
        'No abras la puerta del horno constantemente, esto reduce la temperatura y afecta el tiempo de cocción.',
        'Usa papel manteca o papel aluminio para evitar que los alimentos se peguen a la bandeja.',
        'Rota las bandejas a mitad de cocción para asegurar un dorado parejo.'
      ]
    },
    {
      icon: '🍖',
      titulo: 'A la Parrilla',
      icono: <Whatshot />,
      consejos: [
        'Asegúrate de que la parrilla esté bien limpia y engrasada antes de comenzar.',
        'Sella la carne a fuego fuerte primero y luego muévela a fuego indirecto para terminar la cocción.',
        'Deja reposar las carnes 5-10 minutos después de la cocción para que los jugos se redistribuyan.',
        'Marina las carnes al menos 2 horas antes para maximizar el sabor.',
        'Usa un termómetro de cocina para asegurar el punto de cocción perfecto.'
      ]
    },
    {
      icon: '🍲',
      titulo: 'En Olla (Guisos y Salsas)',
      icono: <SetMeal />,
      consejos: [
        'El secreto de un buen guiso es un buen sofrito: cebolla, pimiento y ajo cocidos a fuego lento.',
        'No tengas prisa: los guisos mejoran con cocción lenta. Deja que hiervan a fuego lento.',
        'Agrega los condimentos en capas: algunos al principio, otros al final para sabores más complejos.',
        'Si la salsa está muy espesa, agrega caldo. Si está muy líquida, cocina a fuego alto sin tapa.',
        'Los guisos saben mejor al día siguiente, los sabores se integran con el tiempo.'
      ]
    },
    {
      icon: '🔪',
      titulo: 'Técnicas de Corte',
      icono: <Kitchen />,
      consejos: [
        'Mantén tus cuchillos bien afilados. Un cuchillo afilado es más seguro que uno sin filo.',
        'Usa una tabla de cortar estable. Coloca un paño húmedo debajo si se mueve.',
        'Para cortar cebolla sin llorar, déjala en el congelador 10 minutos antes de cortarla.',
        'Corta siempre alejándote de tu cuerpo y mantén los dedos en forma de garra.',
        'El corte "juliana" es perfecto para verduras que se cocinan rápido en salteados.'
      ]
    },
    {
      icon: '🧂',
      titulo: 'Sazonado y Condimentos',
      icono: <Restaurant />,
      consejos: [
        'Sal tu comida en capas: un poco al principio, durante la cocción y al final.',
        'Las especias secas deben agregarse al principio para que liberen sus aceites.',
        'Las hierbas frescas se agregan al final de la cocción para preservar su sabor.',
        'Prueba tu comida constantemente mientras cocinas para ajustar el sazón.',
        'El limón o vinagre al final pueden realzar todos los sabores del platillo.'
      ]
    },
    {
      icon: '⏰',
      titulo: 'Organización (Mise en Place)',
      icono: <AccessTime />,
      consejos: [
        'Prepara todos tus ingredientes antes de empezar a cocinar (mise en place).',
        'Lee la receta completa antes de comenzar para entender todos los pasos.',
        'Ten a mano todos los utensilios que necesitarás durante la preparación.',
        'Limpia sobre la marcha para mantener tu espacio de trabajo ordenado.',
        'Prepara ingredientes en pequeños bowls como los chefs profesionales.'
      ]
    }
  ];

  return (
    <Fade in={true} timeout={600}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Kitchen sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Tips y Técnicas de Cocina
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Domina tu cocina con estos consejos de expertos
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          {tips.map((tip, index) => (
            <Accordion 
              key={index}
              sx={{
                mb: 2,
                '&:before': {
                  display: 'none',
                },
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '8px !important',
                '&:first-of-type': {
                  borderRadius: '8px !important',
                },
                '&:last-of-type': {
                  borderRadius: '8px !important',
                }
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ fontSize: '2rem' }}>
                    {tip.icon}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {tip.titulo}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 2 }}>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {tip.consejos.map((consejo, idx) => (
                    <Typography 
                      key={idx} 
                      component="li" 
                      sx={{ 
                        mb: 1.5,
                        lineHeight: 1.7,
                        '&:last-child': {
                          mb: 0
                        }
                      }}
                    >
                      {consejo}
                    </Typography>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box 
          sx={{ 
            mt: 4, 
            p: 3, 
            backgroundColor: 'background.paper',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            💡 Consejo Final
          </Typography>
          <Typography variant="body1" color="text.secondary">
            La práctica hace al maestro. No tengas miedo de experimentar y cometer errores. 
            Cada error es una oportunidad de aprender algo nuevo en la cocina.
          </Typography>
        </Box>
      </Container>
    </Fade>
  );
}

export default TipsPage;